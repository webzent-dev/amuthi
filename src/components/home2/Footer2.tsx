import { Github, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/features" },
    { name: "API", href: "/features" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Documentation", href: "/features" },
    { name: "Help Center", href: "/contact" },
    { name: "Community", href: "/about" },
    { name: "Status", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy", href: "/about" },
    { name: "Terms", href: "/about" },
    { name: "Security", href: "/about" },
    { name: "Cookies", href: "/about" },
  ],
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
          <div className="col-span-2">
            <span className="font-display font-extrabold text-2xl tracking-tight mb-4 block">
              <span className="text-primary">a</span>
              <span className="text-foreground">muthi</span>
            </span>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Your complete business toolkit. Smart links, scheduling, QR codes, and more.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9901402896 / 8284854030</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@amuthi.com" className="hover:text-foreground transition-colors">info@amuthi.com</a>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>43, JB Road, Silpukhuri, Guwahati, Assam 781003</span>
              </div>
            </div>
            
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

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Amuthi. All rights reserved.
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
