import { FaInstagram, FaSoundcloud} from "react-icons/fa";


export function Footer() {
    return (
  <footer className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-400">
    <p>© {new Date().getFullYear()} SEELE. All rights reserved.</p>
    <div className="mt-4 flex justify-center gap-4">
      <a
        href="https://www.instagram.com/stories/hidonash/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-red-500 transition-all duration-300"
      >
        <FaInstagram className="text-2xl" />
      </a>
      <a
        href="https://soundcloud.com/hidonash"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-red-500 transition-all duration-300"
      >
        <FaSoundcloud className="text-2xl" />
      </a>
    </div>
    <p className="mt-2"></p>
  </footer>
  );
}
