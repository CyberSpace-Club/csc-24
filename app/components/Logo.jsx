import Image from "next/image";
import SvgIcon from "../../assets/cs.svg";

const Logo = () => {
  return (
    <div className="relative w-32 h-32">
      <Image
        src={SvgIcon}
        alt="Logo"
        fill
        className="object-contain" // CSS class replaces objectFit prop
      />
    </div>
  );
};

export default Logo;
