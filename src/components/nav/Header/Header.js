import { memo } from "react";
import NavList from "../NavList/NavList";

const Header = ({ navItems = [], currentPageId, onClickNavItem }) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <button className="navbar-brand">Awesome App</button>
      <div id="navbarSupportedContent">
        <NavList
          currentPageId={currentPageId}
          items={navItems}
          onClickNavItem={onClickNavItem}
        />
      </div>
    </nav>
  );
};

export default memo(Header);
