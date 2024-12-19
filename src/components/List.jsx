import React from "react";
import "./List.scss";
import Card from "./Card";
import { RiAddFill, RiDeleteBin2Fill } from "@remixicon/react";

function List({ id, title, cards = [], toggleCardModal, deleteList }) {
  return (
    <div className="list">
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
          return <Card />;
        })}
      </div>
    </div>
  );
}

export default List;
