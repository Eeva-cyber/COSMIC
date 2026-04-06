import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="COSMIC"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="font-display text-sm font-bold tracking-[0.25em] uppercase text-foreground">
              Cosmic
            </span>
          </div>

          <div className="flex items-center gap-8 text-[11px] font-heading tracking-[0.15em] uppercase text-muted">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-light tracking-wide">
            &copy; {new Date().getFullYear()} COSMIC. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-light tracking-wide">
            The future of beauty.
          </p>
        </div>
      </div>
    </footer>
  );
}
