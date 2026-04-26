"use client";
import Image from "next/image";
import Link from "next/link";
import userLogo from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <>
      <div className="sticky top-18 z-50 bg-base-100 py-3 flex justify-between items-center gap-3 container mx-auto mt-4">
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
        {isPending ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : user ? (
          <div className="flex justify-center items-center gap-3">
            <h2>Hello, {user.name}</h2>
            <Image src={userLogo} width={40} height={40} alt="User Logo" />
            <button className="btn btn-neutral">
              <Link href={"/"} onClick={async () => await authClient.signOut()}>
                Logout
              </Link>
            </button>
          </div>
        ) : (
          <button className="btn btn-neutral">
            <Link href={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
