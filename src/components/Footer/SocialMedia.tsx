import { Link } from "react-router-dom";
import { links } from "../../data/links";

const SocialMedia = () => {
  return (
    <>
      {links.media.map((link) => (
        <Link
          key={link.id}
          to={link.href}
          className="underline-hover text-sm min-h-6 relative text-white"
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default SocialMedia;
