import React from "react";

const ModeButtons = ({ isEditing, setEditMode, setNormalMode }) => {
  if (isEditing) {
    return (
      <td>
        <button onClick={setNormalMode}>Save</button>
      </td>
    );
  } else {
    return (
      <td>
        <button>Delete</button>
        <button onClick={setEditMode}>Edit</button>
      </td>
    );
  }
};

export default ModeButtons;
