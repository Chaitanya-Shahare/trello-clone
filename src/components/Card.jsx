import React from "react";
import "./Card.scss";
import { RiDeleteBin2Line } from "@remixicon/react";

function Card({ id, columnIndex, index, title, deleteCard, setBoard }) {
  const onDragStart = (e) => {
    e.dataTransfer.setData(
      "card",
      JSON.stringify({
        id,
        sourceColumnIndex: columnIndex,
        title,
        index,
      })
    );
    console.log(e.dataTransfer.getData("card"));
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const draggedCard = JSON.parse(e.dataTransfer.getData("card"));

    if (draggedCard.sourceColumnIndex !== columnIndex) return;

    setBoard((board) => {
      let newBoard = [...board];

      let temp = newBoard[columnIndex].cards[index];
      newBoard[columnIndex].cards[index] = draggedCard;
      newBoard[columnIndex].cards[draggedCard.index] = temp;

      return newBoard;
    });
  };
  return (
    <div
      className="card"
      draggable
      onDragStart={onDragStart}
      onDrop={handleOnDrop}
    >
      <div className="card__main">{title}</div>
      <div className="card__footer">
        <button className="card__delete-btn" onClick={() => deleteCard(id)}>
          <RiDeleteBin2Line size={20} />
        </button>
      </div>
    </div>
  );
}

export default Card;
