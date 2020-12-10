import React from "react";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import { useState } from "react";

const App = () => {
  const [currentPageId, setCurrentPageId] = useState("home");

  const navItems = [
    { label: "Home", pageId: "home" },
    {
      label: "Counterz",
      pageId: "counterz",
      badgeLabel: "3",
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

export default App;
