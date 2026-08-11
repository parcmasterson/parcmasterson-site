import { Kicker } from "./Kicker";

const EMAIL = "parc.masterson@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/parcmasterson";
const INSTAGRAM_URL = "https://www.instagram.com/parcmasterson/";

export function Footer() {
  return (
    <footer id="contact" className="bg-teal">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10 py-16 md:py-20">
        <Kicker tone="ground">Say hello</Kicker>
        <h2 className="font-display font-normal text-ground text-3xl md:text-5xl leading-tight mb-8 max-w-xl">
          Get in touch.
        </h2>
        <div className="flex items-center gap-6 text-ground mb-12">
          <a
            href={`mailto:${EMAIL}`}
            className="font-sans text-sm font-medium hover:opacity-70 transition-opacity"
          >
            Email me &#8599;&#xFE0E;
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium hover:opacity-70 transition-opacity"
          >
            Linkedin &#8599;&#xFE0E;
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium hover:opacity-70 transition-opacity"
          >
            Instagram &#8599;&#xFE0E;
          </a>
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
