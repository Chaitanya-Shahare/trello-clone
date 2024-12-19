import React from "react";
import "./Card.scss";
import { RiDeleteBin2Line } from "@remixicon/react";

function Card({ title = "Card" }) {
  return (
    <div className="card">
      <div className="card__main">{title}</div>
      <div className="card__footer">
        <button className="card__delete-btn">
          <RiDeleteBin2Line size={20} />
        </button>
      </div>
    </div>
  );
}

export default Card;
