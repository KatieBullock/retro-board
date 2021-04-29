const AddButton = ({ addItem, category }) => {
  return (
    <button
      type="button"
      className="ButtonAdd button button-default"
      aria-label="Add new card"
      title="Add new card"
      onClick={() => addItem(category)}
    >
      +
    </button>
  );
};

export default AddButton;
