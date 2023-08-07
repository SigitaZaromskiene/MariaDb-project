import NumbersList from "./NumbersList";
import SelectColor from "./SelectColor";
import SelectNumberForm from "./SelectNumberForm";
import { useState } from "react";

function Numbers() {
  const [color, selectColor] = useState("");
  return (
    <div className="number-container">
      <div className="left-container">
        <SelectNumberForm />
        <SelectColor color={color} selectColor={selectColor} />
      </div>
      <NumbersList color={color} />
    </div>
  );
}

export default Numbers;
