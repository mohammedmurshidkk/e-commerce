"use client";
import { useCart } from "@/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AppLayout() {
  const { cartCount } = useCart();
  const pathname = usePathname();

  const NavbarLink = ({ href, text, badgeCount }) => {
    const isActive = pathname == href;

    return (
      <li className={`nav-item ${isActive ? "active" : ""}`}>
        <Link href={href} className={`nav-link ${isActive ? "active" : ""}`}>
          {text}
          {badgeCount && (
            <span className="badge badge-danger text-danger">{badgeCount}</span>
          )}
        </Link>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/products">
          E-commerce
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavbarLink href="/products" text="Products" />
            <NavbarLink href="/cart" text="Cart" badgeCount={`${cartCount}`} />
            <NavbarLink href="/" text="About" />
            <NavbarLink href="/" text="Contact" />
            <NavbarLink href="/" text="Account" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppLayout;
