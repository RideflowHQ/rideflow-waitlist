import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-6 py-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-4xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#e5ff00] rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-black">🏠</span>
          </div>
          <span className="text-xl font-bold text-foreground">ENIQO</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            For Agents
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-4xl">
        <div className="flex flex-row gap-4 text-sm">
          <span className="text-muted-foreground">
            Coming to Abuja, Nigeria
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">
            Property Discovery & Inspection
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ENIQO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
