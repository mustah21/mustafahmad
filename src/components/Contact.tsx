const rows = [
  {
    k: "Email",
    v: "mustafa.ahmad@metropolia.fi",
    href: "mailto:mustafa.ahmad@metropolia.fi",
  },
  { k: "Phone", v: "+358 449302118", href: "tel:+358449302118" },
  {
    k: "GitHub",
    v: "github.com/mustah21",
    href: "https://github.com/mustah21/",
  },
  {
    k: "LinkedIn",
    v: "linkedin.com/in/mustafa-ahmad",
    href: "https://www.linkedin.com/in/mustafa-ahmad-002063332/",
  },
  { k: "Location", v: "Helsinki, Finland" },
];

const Contact = () => {
  return (
    <section id="contact" className="border-t border-dashed border-line py-20">
      <div className="container px-6">
        <div className="seclabel">connect</div>
        <h2 className="mb-8 text-2xl font-extrabold text-foreground">Contact</h2>

        <div className="mx-auto max-w-2xl border border-line bg-card p-6">
          {rows.map((row, i) => (
            <div
              key={row.k}
              className={`flex items-center justify-between py-2.5 text-[13px] ${
                i < rows.length - 1 ? "border-b border-dashed border-line" : ""
              }`}
            >
              <span className="text-muted-foreground">{row.k}</span>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:text-foreground"
                >
                  {row.v}
                </a>
              ) : (
                <span className="text-foreground">{row.v}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
