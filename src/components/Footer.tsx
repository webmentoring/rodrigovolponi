const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.15em] text-muted-foreground">
          © {new Date().getFullYear()} Rodrigo Volponi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
