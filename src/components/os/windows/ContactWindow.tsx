import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const rows = [
  {
    k: "Email",
    v: "mustafa.ahmad@metropolia.fi",
    href: "mailto:mustafa.ahmad@metropolia.fi",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    k: "Phone",
    v: "+358 449302118",
    href: "tel:+358449302118",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    k: "GitHub",
    v: "github.com/mustah21",
    href: "https://github.com/mustah21/",
    icon: <Github className="h-4 w-4" />,
  },
  {
    k: "LinkedIn",
    v: "linkedin.com/in/mustafa-ahmad",
    href: "https://www.linkedin.com/in/mustafa-ahmad-002063332/",
    icon: <Linkedin className="h-4 w-4" />,
  },
  { k: "Location", v: "Helsinki, Finland", icon: <MapPin className="h-4 w-4" /> },
];

const ContactWindow = () => {
  return (
    <div className="space-y-1.5 text-sm">
      {rows.map((row) =>
        row.href ? (
          <a
            key={row.k}
            href={row.href}
            target={row.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="glass-panel-solid flex items-center gap-3 rounded-lg p-3 transition-colors hover:border-primary/40"
          >
            <span className="text-primary">{row.icon}</span>
            <div>
              <div className="text-[11px] text-muted-foreground">{row.k}</div>
              <div className="text-[13px]">{row.v}</div>
            </div>
          </a>
        ) : (
          <div key={row.k} className="glass-panel-solid flex items-center gap-3 rounded-lg p-3">
            <span className="text-muted-foreground">{row.icon}</span>
            <div>
              <div className="text-[11px] text-muted-foreground">{row.k}</div>
              <div className="text-[13px]">{row.v}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ContactWindow;
