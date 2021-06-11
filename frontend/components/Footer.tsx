import React from "react";
import Wrapper from "./Wrapper";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-green-200">
        <h1 className="text-center text-2xl">Footer</h1>
      </Wrapper>
    </footer>
  );
};

export default Footer;
