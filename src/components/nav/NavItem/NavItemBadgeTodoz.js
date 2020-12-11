import { memo } from "react";
import { useSelector } from "react-redux";
import memoize from "memoize-one";

import type { AppState } from "../../../lib/types";

// Fonction qui fait un calcul lourd
const compute = (tasks) =>
  `${tasks.filter((t) => t.done).length}/${tasks.length}`;

const memoizedCompute = memoize(compute);

// nb de taches (done = true) "/" nb de tâches total
const NavItemBadgeTodoz = () => {
  const tasks = useSelector((state: AppState) => state.todoz.tasks);

  // Le calcul n'est pas refait à chaque render, mais uniquement si tasks change
  // Note: ici c'est idiot car tasks est la SEULE raison d'un re-render
  return memoizedCompute(tasks);

  /*
  // Attention ici le selector refera un "filter" à chaque action, quelle qu'elle soit
  const todozBadge = useSelector(
    (state: AppState) =>
      state.todoz.tasks.filter((t) => t.done).length +
      "/" +
      state.todoz.tasks.length
  );

  return todozBadge;
  */
};

export default memo(NavItemBadgeTodoz);
