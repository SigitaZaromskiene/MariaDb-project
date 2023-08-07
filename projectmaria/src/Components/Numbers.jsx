import SelectColor from "./SelectColor";
import SelectNumberForm from "./SelectNumberForm";

function Numbers() {
  return (
    <div className="number-container">
      <SelectNumberForm />
      <SelectColor />
    </div>
  );
}

export default Numbers;
