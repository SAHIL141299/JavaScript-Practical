import React from "react";
import Button from "../componants/custombutton/button";
import Input from "../componants/custominput/input";
import Dropdown from "../componants/customdropdown/dropdown";
import { footerdropdown } from "../utils/options";
import "../App.css";

const footer = () => {
  return (
    <>
      <h1>Footer</h1>
      <div className="componantdata">
        <Input style={{padding:"0.3rem"}} type="text" placeholder="text here" />
        <Dropdown
          value={footerdropdown}
          style={{
            padding: "15px 15px",
            width: "11rem",
          }}
        />
        <Button
          label="OK"
          style={{
            color: "white",
            padding: "5px 5px",
            backgroundColor: "blue",
            borderRadius: "1.5rem",
            fontSize: "10px",
            fontWeight: "500",
            cursor: "pointer",
            width: "11rem",
          }}
        />
      </div>
      </>
  );
};

export default footer;
