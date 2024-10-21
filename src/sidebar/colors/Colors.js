import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

export default function Colors({ handleRadioInput }) {
  return (
    <div className="color">
      <h5>Color</h5>
      <div>
        <Input
          value="Black"
          title="Black"
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          value="Red"
          title="Red"
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          value="Green"
          title="Green"
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          value="Blue"
          title="Blue"
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          value="White"
          title="White"
          name="test"
          handleRadioInput={handleRadioInput}
        />
      </div>
    </div>
  );
}
