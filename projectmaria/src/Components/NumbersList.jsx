import Button from "./Button";

function NumbersList({ color }) {
  return (
    <div className="right-container">
      <li style={{ backgroundColor: color }}>
        <p>78</p>
        <div className="button-flex">
          <Button text="Delete"></Button>
          <Button text="Change number"></Button>
        </div>
      </li>
    </div>
  );
}

export default NumbersList;
