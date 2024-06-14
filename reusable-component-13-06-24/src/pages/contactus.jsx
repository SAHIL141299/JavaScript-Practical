import React from "react";
import Button from "../componants/custombutton/button";
import Input from "../componants/custominput/input";
import Dropdown from "../componants/customdropdown/dropdown";
import "../App.css";
import { contactusdropdown } from "../utils/options";

const contactus = () => {
  return (
    <>
      <h1>Contect Us</h1>
      <div className="componantdata">
        <Input
          style={{ padding: "0.3rem" }}
          type="text"
          placeholder="search here"
        />
        <Dropdown value={contactusdropdown} />
        <Button
          label="SUBMIT"
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "0.5rem",
            fontSize: "15px",
            fontWeight: "500",
            cursor: "pointer",
            padding: "0.2rem 3.8rem",
          }}
        />
      </div>
    </>
  );
};

export default contactus;
