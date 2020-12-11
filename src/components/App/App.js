import React, { memo } from "react";
import Header from "../nav/Header/Header";
import MainContent from "../MainContent/MainContent";
import { useState } from "react";
import NavItemBadgeCounterz from "../nav/NavItem/NavItemBadgeCounterz";
import NavItemBadgeTodoz from "../nav/NavItem/NavItemBadgeTodoz";

const App = () => {
  const [currentPageId, setCurrentPageId] = useState("todoz");

  const [navItems] = useState(() => [
    { label: "Home", pageId: "home" },
    {
      label: "Counterz",
      pageId: "counterz",
      badgeLabel: <NavItemBadgeCounterz />,
    },
    { label: "Todoz", pageId: "todoz", badgeLabel: <NavItemBadgeTodoz /> },
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
