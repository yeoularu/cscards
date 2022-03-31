import logo from "./logo.svg";

function Header() {
  return (
    <header className="absolute left-0 top-0 w-full p-2 flex justify-center">
      <img className="h-8 basis-32 hover:animate-spin" src={logo} />
    </header>
  );
}

export default Header;
