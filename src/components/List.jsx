import React from "react";
import "./List.scss";
import Card from "./Card";
import { RiAddFill, RiDeleteBin2Fill } from "@remixicon/react";

function List({
  id,
  index,
  title,
  cards = [],
  toggleCardModal,
  deleteList,
  setBoard,
}) {
  const handleOnDrop = (e) => {
    e.preventDefault();
    const draggedCard = JSON.parse(e.dataTransfer.getData("card"));

    if (draggedCard.sourceColumnIndex === index) return;

    setBoard((board) => {
      let newBoard = [...board];
      newBoard[draggedCard.sourceColumnIndex].cards = newBoard[
        draggedCard.sourceColumnIndex
      ].cards.filter((c) => c.id !== draggedCard.id);
      newBoard[index].cards.push(draggedCard);

      return newBoard;
    });
  };

  return (
    <div
      className="list"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={handleOnDrop}
    >
      <div className="list__header">
        <h3 className="list__title">{title}</h3>
        <button className="list__add-btn" onClick={toggleCardModal}>
          <RiAddFill size={20} />
        </button>
        <button className="card__delete-btn" onClick={() => deleteList(id)}>
          <RiDeleteBin2Fill size={20} />
        </button>
      </div>
      <div className="list__cards-wrapper">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              id={card.id}
              columnIndex={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
