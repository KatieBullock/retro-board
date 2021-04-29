import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ deleteItem, index }) => {
  return (
    <button
      type="button"
      className="button button-delete"
      title="Delete"
      onClick={() => deleteItem(index)}
    >
      <FontAwesomeIcon icon={faTrashAlt} /> Delete
    </button>
  );
};

export default DeleteButton;
