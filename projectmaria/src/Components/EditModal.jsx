import { useState, useContext } from "react";
import { Global } from "./Global";

function EditModal({ li }) {
  const { setEditNumber, setEditNumberModal } = useContext(Global);

  const [editLuckyNumber, setEditLuckyNumber] = useState(li.number);

  const editLuckyNumberHandler = () => {
    setEditNumber({
      id: li.id,
      number: editLuckyNumber,
    });
    setEditNumberModal(null);
  };

  return (
    <div className="edit-modal-container">
      <form className="edit-modal-form">
        <h4>Change your lucky number</h4>
        <label>Your lucky number is: {editLuckyNumber}</label>
        <input
          type="range"
          min="1"
          max="99"
          onChange={(e) => setEditLuckyNumber(e.target.value)}
        />
        <div className="btn-container">
          <button className="button" onClick={editLuckyNumberHandler}>
            Change
          </button>
          <button className="button" onClick={() => setEditNumberModal(null)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
