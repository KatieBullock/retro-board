const ActionItems = (props) => {
  return (
    <div class="RetroCategory RetroCategory-3">
      <h2>Action Items</h2>
      <button
        type="button"
        class="ButtonAdd button button-default"
        aria-label="Add to new card"
        title="Add to new card"
      >
        +
      </button>
      {props.children}
    </div>
  );
};

export default ActionItems;
