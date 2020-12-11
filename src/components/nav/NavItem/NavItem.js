import cx from "classnames";
import { memo } from "react";

const NavItem = ({
  label,
  pageId,
  badgeLabel = "", // string or Element
  active = false,
  onClick,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <li className={cx("nav-item", { active })}>
      <a className="nav-link" href={`#${pageId}`} onClick={handleClick}>
        {label}
        {badgeLabel && (
          <span className="ml-1 badge badge-pill badge-primary">
            {badgeLabel}
          </span>
        )}
        {active && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
};

export default memo(NavItem);
