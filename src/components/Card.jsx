import React from "react";
import "./Card.scss";
import { RiDeleteBin2Line } from "@remixicon/react";

function Card({ id, columnIndex, title, deleteCard }) {
  const onDragStart = (e) => {
    e.dataTransfer.setData(
      "card",
      JSON.stringify({
        id,
        sourceColumnIndex: columnIndex,
        title,
      })
    );
    console.log(e.dataTransfer.getData("card"));
  };
  return (
    <div className="card" draggable onDragStart={onDragStart}>
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
