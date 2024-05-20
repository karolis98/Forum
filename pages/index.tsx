import { title } from "process";
import Header from "../Components/Header/Header";
import React from "react";

const links = [
  { id: 1, title: "About", href: "/about" },
  { id: 2, title: "Gallery", href: "/gallery" },
  { id: 3, title: "Contacts", href: "/contacts" },
];

const Index = () => {
  return (
    <div>
      <Header logo={"GAME SELLER"} links={links} />
    </div>
  );
};

export default Index;
