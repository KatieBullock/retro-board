const WentWell = (props) => {
  return (
    <div class="RetroCategory RetroCategory-1">
      <h2>Went Well</h2>
      <button
        type="button"
        class="ButtonAdd button button-default"
        aria-label="Add new card"
        title="Add new card"
        name="wentWell"
        onClick={props.newItem}
      >
        +
      </button>
      {props.children}
    </div>
  );
};

export default WentWell;
