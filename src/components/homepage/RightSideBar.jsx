import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div className="col-span-3">
      <h2 className="mb-4 font-bold text-xl">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="btn btn-outline btn-primary">
          {" "}
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn">
          {" "}
          <FaGithub />
          Login with GitHut
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
