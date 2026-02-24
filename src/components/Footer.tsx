const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.15em] text-muted-foreground">
          © {new Date().getFullYear()} Rodrigo Volponi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
