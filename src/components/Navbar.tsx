import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="py-4 bg-muted">
      <div className="flex items-center justify-between align-element">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex items-center justify-center gap-x-4">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
