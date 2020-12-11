import { memo } from "react";
import { useSelector } from "react-redux";

const NavItemBadgeCounterz = () => {
  const counterzBadge = useSelector((state) =>
    String(state.counterz.labels.length)
  );

  return counterzBadge;
};

export default memo(NavItemBadgeCounterz);
