import React, { useState } from "react";
import Menu from "./MenuApi.jsx";
import Menucard from "./Menucard.jsx";
import Navbar from "./Navbar.jsx";

const uniqueList = [
  "All",
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updateList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );
};

export default Restaurant;
