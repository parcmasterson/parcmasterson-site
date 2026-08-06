"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHash, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "hd-case-access";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export async function isCaseUnlocked() {
  const expected = process.env.CASE_STUDY_PASSWORD;
  if (!expected) return false;
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return false;
  return safeEqual(token, hash(expected));
}

export async function unlockCaseStudy(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const slug = String(formData.get("slug") ?? "");
  const expected = process.env.CASE_STUDY_PASSWORD ?? "";

  const match = expected.length > 0 && safeEqual(hash(password), hash(expected));

  if (!match) {
    redirect(`/work/${slug}?error=1`);
  }

  (await cookies()).set(COOKIE_NAME, hash(expected), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });

  redirect(`/work/${slug}`);
}
