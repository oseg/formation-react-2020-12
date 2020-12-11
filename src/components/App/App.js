import React, { memo } from "react";
import Header from "../nav/Header/Header";
import MainContent from "../MainContent/MainContent";
import { useState } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const [currentPageId, setCurrentPageId] = useState("home");

  const counterzBadge = useSelector((state) => String(state.labels.length));

  const navItems = [
    { label: "Home", pageId: "home" },
    {
      label: "Counterz",
      pageId: "counterz",
      badgeLabel: counterzBadge,
    },
    { label: "Todoz", pageId: "todoz", badgeLabel: "2/4" },
  ];

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
