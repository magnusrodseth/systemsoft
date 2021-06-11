import Wrapper from "components/Wrapper";
import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-indigo-200">
        <h1 className="text-center text-2xl">Contact us</h1>
      </Wrapper>
    </div>
  );
};

export default Contact;
