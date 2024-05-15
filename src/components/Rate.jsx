import React from "react";
import formatCurrency from "../formatCurrency.js";

const Rate = ({ isEditing, value, setRate }) => {
  if (isEditing) {
    return (
      <td>
        $
        <input
          type="text"
          value={value}
          onChange={(e) => setRate(e.target.value)}
        />
        /hr
      </td>
    );
  } else {
    return <td>{formatCurrency(value) + "/hr"}</td>;
  }
};

export default Rate;
