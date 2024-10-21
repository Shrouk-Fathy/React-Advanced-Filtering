import React from "react";
import "./Price.css";
import Input from "../../components/Input";

export default function Price({ handleRadioInput }) {
  return (
    <div className="price">
      <h5>Price</h5>
      <div>
        <Input
          title="0-50$"
          value={50}
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          title="50-100$"
          value={100}
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          title="100-150$"
          value={150}
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          title="Over 150$"
          value={200}
          name="test"
          handleRadioInput={handleRadioInput}
        />
      </div>
    </div>
  );
}
