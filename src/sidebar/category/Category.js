import React from "react";
import "./Category.css";
import Input from "../../components/Input";

export default function Category({ handleRadioInput }) {
  return (
    <div className="category">
      <h5>Category</h5>
      <div>
        <Input
          value="All"
          title="All"
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          value="Sneakers"
          title="Sneakers"
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          value="Flats"
          title="Flats"
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          value="Sandals"
          title="Sandals"
          name="test"
          handleRadioInput={handleRadioInput}
        />
        <Input
          value="Heels"
          title="Heels"
          name="test"
          handleRadioInput={handleRadioInput}
        />
      </div>
    </div>
  );
}
