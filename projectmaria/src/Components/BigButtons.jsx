function BigButtons({ text, action }) {
  return (
    <button className="big-btn" onClick={action}>
      {text}
    </button>
  );
}

export default BigButtons;
