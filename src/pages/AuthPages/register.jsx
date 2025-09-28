import React, { useEffect } from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import Form__RegisterP from "./Sections/Form__RegisterP";
import "./registerPage.scss";

const register = () => {
  return (
    <main className="registerPage">
      <Form__RegisterP />
    </main>
  );
};

export default register;
