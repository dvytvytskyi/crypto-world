import React, { useEffect } from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import Form__LoginP from "./Sections/Form__LoginP";
import "./registerPage.scss";

const login = () => {
  return (
    <main className="registerPage">
      <Form__LoginP />
    </main>
  );
};

export default login;
