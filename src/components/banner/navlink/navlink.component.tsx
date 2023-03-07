import { Link  } from "react-router-dom";

type NavLinkProps = {
  text: string;
  link: string;
};

const NavLink = ({ text, link }: NavLinkProps) => {
  return (
    <Link
      to={link}
      className="flex justify-center items-center text-background px-2 py-1/2 bg-green/75 hover:bg-pink hover:text-green font-bold duration-200 w-[175px] relative z-10"
    >
      {text}
    </Link>
  );
};

export default NavLink;
