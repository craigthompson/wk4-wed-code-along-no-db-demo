import ModeButtons from "./ModeButtons";
import Description from "./Description";
import Rate from "./Rate";
import Hours from "./Hours";
import formatCurrency from "../formatCurrency";
import { useState } from "react";

const TableRow = ({
  initialIsEditing,
  initialDescription,
  initialRate,
  initialHours,
}) => {
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [description, setDescription] = useState(initialDescription);
  const [rate, setRate] = useState(initialRate);
  const [hours, setHours] = useState(initialHours);

  const setEditMode = () => setIsEditing(true);
  const setNormalMode = () => setIsEditing(false);

  return (
    <tr>
      <ModeButtons
        isEditing={isEditing}
        setEditMode={setEditMode}
        setNormalMode={setNormalMode}
      />
      <Description isEditing={isEditing} value={description} />
      <Rate isEditing={isEditing} value={rate} />
      <Hours isEditing={isEditing} value={hours} />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  );
};

export default TableRow;
