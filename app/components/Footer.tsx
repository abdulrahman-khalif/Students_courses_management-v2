import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

// A simple array of social icons and links
const socialIcons = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#f3f4f6", padding: "2rem 1rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Terms & Conditions */}
        <div style={{ color: "#4b5563", textAlign: "center" }}>
          <p>Terms & Conditions</p>
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              style={{ color: "#6b7280", transition: "color 300ms" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#10B981")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <div style={{ color: "#4b5563", textAlign: "center" }}>
          <p>© {currentYear} Abdulrahman Nur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
