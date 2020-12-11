import React, { memo } from "react";
import Header from "../nav/Header/Header";
import MainContent from "../MainContent/MainContent";
import { useState } from "react";
import NavItemBadgeCounterz from "../nav/NavItem/NavItemBadgeCounterz";

const App = () => {
  const [currentPageId, setCurrentPageId] = useState("todoz");

  const [navItems] = useState(() => [
    { label: "Home", pageId: "home" },
    {
      label: "Counterz",
      pageId: "counterz",
      badgeLabel: <NavItemBadgeCounterz />,
    },
    { label: "Todoz", pageId: "todoz", badgeLabel: "2/4" },
  ]);

  return (
    <>
      <Header
        navItems={navItems}
        currentPageId={currentPageId}
        onClickNavItem={setCurrentPageId}
      />
      <MainContent currentPageId={currentPageId} />
    </>
  );
};

export default memo(App);
