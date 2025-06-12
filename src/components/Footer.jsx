import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center px-4">
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-200 ease-in-out"
              aria-label={social.name}
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Made with ❤️ by Mahesh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
