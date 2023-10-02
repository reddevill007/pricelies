import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Price<span className="text-primary">Wise</span>
          </p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
