import NumbersList from "./NumbersList";
import SelectColor from "./SelectColor";
import SelectNumberForm from "./SelectNumberForm";
import { useState, useContext, useEffect } from "react";
import BigButtons from "./BigButtons";
import SelectDateForm from "./SelectDateForm";
import { Global } from "./Global";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";

const URL = "http://localhost:3004/numbers";

function Numbers() {
  const [color, selectColor] = useState("");
  const [dateForm, setDateForm] = useState("");
  const [luckyNumber, setLuckyNumber] = useState(0);

  const {
    setErrorMessage,
    message,
    setCreateData,
    createData,
    setNumbersList,
  } = useContext(Global);

  const createNumberHandler = (e) => {
    e.preventDefault();
    if (!color || !dateForm || !luckyNumber) {
      setErrorMessage("Please choose all details");
    } else {
      setCreateData({
        color,
        date: dateForm,
        number: parseInt(luckyNumber),
      });
      selectColor("");
      setDateForm(Date.now());
      setLuckyNumber(0);
    }
  };

  useEffect(() => {
    if (createData === null) {
      return;
    }
    axios
      .post(URL, createData)
      .then((res) => setNumbersList(res.data))
      .catch((error) => setErrorMessage(error.message));
  }, [createData]);

  return (
    <div className="number-container">
      <div className="left-container">
        <SelectNumberForm
          luckyNumber={luckyNumber}
          setLuckyNumber={setLuckyNumber}
        />
        <SelectColor color={color} selectColor={selectColor} />
        <SelectDateForm
          dateForm={dateForm}
          setDateForm={setDateForm}
        ></SelectDateForm>
        <BigButtons action={createNumberHandler} text="Create" />
      </div>
      {message ? (
        <ErrorMessage
          setErrorMessage={setErrorMessage}
          message={message}
        ></ErrorMessage>
      ) : (
        <NumbersList color={color} />
      )}
    </div>
  );
}

export default Numbers;
