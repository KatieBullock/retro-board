const AddButton = ({ addItem }) => {
  return (
    <button
      type="button"
      className="ButtonAdd button button-default"
      aria-label="Add new card"
      title="Add new card"
      onClick={() => addItem()}
    >
      +
    </button>
  );
};

export default AddButton;
