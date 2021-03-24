const ActionItems = (props) => {
  return (
    <div className="RetroCategory RetroCategory-3">
      <h2>Action Items</h2>
      <button
        type="button"
        className="ButtonAdd button button-default"
        aria-label="Add to new card"
        title="Add to new card"
        onClick={() => props.addItem()}
      >
        +
      </button>
      {props.children}
    </div>
  );
};

export default ActionItems;
