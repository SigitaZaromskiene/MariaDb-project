function SelectDateForm({ dateForm, setDateForm }) {
  return (
    <form className="date-form">
      <label>Choose date</label>
      <input
        type="date"
        min="2022-01-01"
        max="2024-12-31"
        value={dateForm}
        onChange={(e) => setDateForm(e.target.value)}
      ></input>
    </form>
  );
}

export default SelectDateForm;
