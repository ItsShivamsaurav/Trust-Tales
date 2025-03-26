import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

function Footer() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-semibold text-gray-800">
                Trust Tales
              </span>
            </Link>
            <p className="text-gray-600">
              "Every moment is a page waiting to be written."
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-purple-50 p-2 rounded-lg text-purple-600 hover:bg-purple-100 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MyDiary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
