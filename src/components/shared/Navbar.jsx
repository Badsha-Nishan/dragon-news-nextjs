import Image from "next/image";
import Link from "next/link";
import userLogo from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-3 container mx-auto mt-4">
        <div></div>
        <ul className="flex justify-center items-center gap-5 text-gray-700">
          <li>
            <NavLink href={"/category/01"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink href={"/career"} className="text-amber-500 font-bold">
              Career
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-3">
          <Image src={userLogo} width={40} height={40} alt="User Logo" />
          <button className="btn btn-neutral">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
