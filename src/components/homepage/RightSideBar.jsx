"use client";
import { authClient } from "@/lib/auth-client";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideBar = () => {
  const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const signInWithGithub = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="col-span-6 md:col-span-3">
      <h2 className="mb-4 font-bold text-xl">Login With</h2>
      <div className="flex flex-col gap-2">
        <button
          onClick={signInWithGoogle}
          className="btn btn-outline btn-primary"
        >
          {" "}
          <FaGoogle />
          Login with Google
        </button>
        <button onClick={signInWithGithub} className="btn">
          {" "}
          <FaGithub />
          Login with GitHut
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
