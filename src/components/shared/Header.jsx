import logo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center my-8 space-y-2">
      <Image
        className="mx-auto"
        src={logo}
        width={300}
        height={200}
        alt="Logo"
      />
      <p className="text-lg">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
