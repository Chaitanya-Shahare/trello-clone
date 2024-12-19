import React from "react";
import "./List.scss";
import Card from "./Card";
import {
  RiAddFill,
  RiDeleteBack2Fill,
  RiDeleteBin2Fill,
} from "@remixicon/react";

function List({ title, cards = [] }) {
  return (
    <div className="list">
      <div className="list__header">
        <h3 className="list__title">{title}</h3>
        <button className="list__add-btn">
          <RiAddFill size={20} />
        </button>
        <button className="card__delete-btn">
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
