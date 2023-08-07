function SelectColor({ color, selectColor }) {
  return (
    <select
      value={color}
      onChange={(e) => selectColor(e.target.value)}
      className="lucky-color-form"
      style={{ backgroundColor: color }}
    >
      <option value="white">Choose your color</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="yellow">Yellow</option>
      <option value="red">Red</option>
    </select>
  );
}

export default SelectColor;
