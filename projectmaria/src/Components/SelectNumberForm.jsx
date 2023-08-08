function SelectNumberForm({ luckyNumber, setLuckyNumber }) {
  return (
    <form className="lucky-number-form">
      <h4>Choose your lucky number</h4>
      <label>Your lucky number is: {luckyNumber}</label>
      <input
        type="range"
        min="1"
        max="99"
        value={luckyNumber}
        onChange={(e) => setLuckyNumber(e.target.value)}
      />
    </form>
  );
}

export default SelectNumberForm;
