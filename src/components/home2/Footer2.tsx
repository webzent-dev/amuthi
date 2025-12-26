import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "Help Center", "Community", "Status"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer2 = () => {
  return (
    <footer className="py-20 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <span className="font-display font-extrabold text-2xl tracking-tight mb-4 block">
              <span className="text-primary">a</span>
              <span className="text-foreground">muthi</span>
            </span>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Your complete business toolkit. Smart links, scheduling, QR codes, and more.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Amuthi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with 💜 for creators everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
