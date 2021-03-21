const RetroCard = () => {
  return (
    <div class="RetroCard" aria-label="Retro card">
      <textarea
        class="textbox"
        placeholder="Enter text here"
        aria-label="Enter text here"
        rows="1"
      >
        Here is an example card
      </textarea>

      <div class="button-group">
        <button type="button" class="button button-left" title="Move left">
          <img src="angleLeft.svg" alt="Move left" width="12" height="12" />
        </button>
        <button type="button" class="button button-delete" title="Delete">
          <img src="timesCircle.svg" alt="Delete" width="12" height="12" />
        </button>
        <div>
          <button type="button" class="button button-left" title="Like">
            <img src="thumbsUp.svg" alt="Like" width="12" height="12" />5
          </button>
          <button type="button" class="button button-left" title="Dislike">
            <img src="thumbsDown.svg" alt="Dislike" width="12" height="12" />0
          </button>
          <button type="button" class="button button-right" title="Move right">
            <img src="angleRight.svg" alt="Move right" width="12" height="12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetroCard;
