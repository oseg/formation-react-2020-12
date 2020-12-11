import PageHome from "../PageHome/PageHome";
import PageCounterz from "../counterz/PageCounterz/PageCounterz";
import PageTodoz from "../todoz/PageTodoz/PageTodoz";
import { memo } from "react";

/**
 * counterzProps : { onAddCounter: function, labels: string[] }
 */
const MainContent = ({ currentPageId }) => (
  <>
    {currentPageId === "home" && <PageHome />}
    {currentPageId === "counterz" && <PageCounterz />}
    {currentPageId === "todoz" && <PageTodoz />}
  </>
);

export default memo(MainContent);
