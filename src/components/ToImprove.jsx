const ToImprove = (props) => {
  return (
    <div class="RetroCategory RetroCategory-2">
      <h2>To Improve</h2>
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

export default ToImprove;
