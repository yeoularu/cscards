import logo from "./logo.svg";

function Header() {
  return (
    <header className="w-full p-4 flex justify-center">
      <img className="h-8 basis-32 hover:animate-spin" src={logo} />
    </header>
  );
}

export default Header;
