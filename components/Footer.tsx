import { Kicker } from "./Kicker";

const EMAIL = "parc.masterson@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/parcmasterson";

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="1.5" y="4" width="17" height="12" rx="1.5" />
      <path d="M2 5l8 6 8-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <rect
        x="1.5"
        y="1.5"
        width="17"
        height="17"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <text
        x="10"
        y="14.5"
        textAnchor="middle"
        fontFamily="var(--font-work-sans), sans-serif"
        fontWeight="700"
        fontSize="9.5"
        fill="currentColor"
      >
        in
      </text>
    </svg>
  );
}

function FountainIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="10" cy="17" rx="7.5" ry="1.6" />
      <path d="M2.5 17c0-1.6 3.4-2.8 7.5-2.8s7.5 1.2 7.5 2.8" />
      <ellipse cx="10" cy="12.2" rx="3.2" ry="0.9" />
      <path d="M6.8 12.2c0-1 1.4-1.7 3.2-1.7s3.2.7 3.2 1.7" />
      <line x1="10" y1="10.5" x2="10" y2="3" />
      <path d="M10 3l-1.8 2.6M10 3l1.8 2.6M10 3v-1.3" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-mint">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-20">
        <Kicker tone="ground">Get in touch</Kicker>
        <h2 className="font-display font-normal text-ground text-3xl md:text-5xl leading-tight mb-8 max-w-xl">
          Let&rsquo;s talk about what design can do here.
        </h2>
        <div className="flex items-center gap-6 text-ground mb-12">
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            title="Email"
            className="hover:opacity-70 transition-opacity"
          >
            <MailIcon />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:opacity-70 transition-opacity"
          >
            <LinkedInIcon />
          </a>
          <span
            role="img"
            aria-label="Made in Kansas City"
            title="Made in Kansas City"
          >
            <FountainIcon />
          </span>
        </div>
        <p className="font-mono text-xs text-ground/70">
          &copy; {new Date().getFullYear()}
          {" "}
          Parc Masterson
        </p>
      </div>
    </footer>
  );
}
