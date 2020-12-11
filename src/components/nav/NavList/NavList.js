import { memo } from "react";
import NavItem from "../NavItem/NavItem";

const NavList = ({ items = [], currentPageId, onClickNavItem }) => {
  const renderItem = ({ badgeLabel, label, pageId }) => (
    <NavItem
      key={label}
      active={pageId === currentPageId}
      badgeLabel={badgeLabel}
      pageId={pageId}
      label={label}
      onClick={onClickNavItem}
    />
  );

  return <ul className="navbar-nav mr-auto">{items.map(renderItem)}</ul>;
};

export default memo(NavList);
