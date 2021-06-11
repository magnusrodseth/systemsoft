import React from "react";
import Wrapper from "./Wrapper";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-pink-200">
        <h1 className="text-center text-2xl">Navigation Bar</h1>
      </Wrapper>
    </div>
  );
};

export default Navbar;
