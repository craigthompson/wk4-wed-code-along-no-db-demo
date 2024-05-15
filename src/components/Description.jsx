import React from "react";

const Description = ({ isEditing, value }) => {
  if (isEditing) {
    return (
      <td>
        <input type="text" value={value} />
      </td>
    );
  } else {
    return <td>{value}</td>;
  }
};

export default Description;
