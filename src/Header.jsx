import logo from "./logo.svg";

function Header() {
  return (
    <header className="absolute left-0 top-0 p-2">
      <img
        className="w-8 h-8 object-contain basis-32 hover:animate-spin"
        src={logo}
      />
    </header>
  );
}

export default Header;
