import React from "react";
import { Hero } from "./hero";
import { About } from "./about.section";
import { Services } from "./services.section";
import { Articles } from "./articles.section";
import { SecuritySystems } from "./security-systems";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Articles isHidden />
      <SecuritySystems />
    </>
  );
};
