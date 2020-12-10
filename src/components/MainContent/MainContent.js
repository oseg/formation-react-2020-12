import PageHome from "../PageHome/PageHome";
import PageCounterz from "../counterz/PageCounterz/PageCounterz";
import PageTodoz from "../PageTodoz/PageTodoz";

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

export default MainContent;
