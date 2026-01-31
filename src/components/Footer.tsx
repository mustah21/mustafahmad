const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mustafa Ahmad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
