import Tab from "../Tab";

function Header() {
  return (
    <div className="flex w-full px-3 pt-3 font-mono text-base text-white rounded-t-lg bg-amber-300">
      <Tab to={"/"}>Home</Tab>
      <Tab to={"/about"}>About</Tab>
      <Tab to="/features">Features</Tab>
    </div>
  );
}

export default Header;
