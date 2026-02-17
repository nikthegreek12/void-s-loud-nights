const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-heading text-xl font-bold tracking-[0.3em] text-primary">
            VOID
          </a>

          <div className="flex items-center gap-6">
            {["Instagram", "Twitter", "Spotify"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-heading tracking-wider uppercase"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <a href="mailto:booking@voidbar.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              booking@voidbar.com
            </a>
            <p className="text-xs text-muted-foreground/50 mt-1">© 2026 VOID. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
