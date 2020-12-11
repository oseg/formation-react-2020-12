import { memo } from "react";
import { useSelector } from "react-redux";

import type { AppState } from "../../../lib/types";

// nb de taches (done = true) "/" nb de tâches total
const NavItemBadgeTodoz = () => {
  const todozBadge = useSelector(
    (state: AppState) =>
      state.todoz.tasks.filter((t) => t.done).length +
      "/" +
      state.todoz.tasks.length
  );

  return todozBadge;
};

export default memo(NavItemBadgeTodoz);
