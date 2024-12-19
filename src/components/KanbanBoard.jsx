import React, { useEffect, useState } from "react";
import "./KanbanBoard.scss";
import List from "./List";

function KanbanBoard() {
  // array of objects of type list
  const [board, setBoard] = useState([]);

  const initializeBoard = () => {
    let dummyBoard = [
      {
        id: 1,
        title: "Todo",
        cards: [
          {
            id: 2,
            title: "Create board",
          },
          {
            id: 3,
            title: "Create list",
          },
        ],
      },
      {
        id: 4,
        title: "Doing",
        cards: [
          {
            id: 5,
            title: "Create board",
          },
          {
            id: 6,
            title: "Create list",
          },
        ],
      },
    ];

    setBoard(dummyBoard);
  };

  // list
  //   {
  //   id:
  //   title:
  //   cards: [
  //   {
  //   id:
  //   title:
  //     }
  //   ]
  //     }

  useEffect(() => {
    initializeBoard();
  }, []);

  return (
    <>
      <button className="create-list-btn">Create List</button>
      <div className="board">
        {board.map((list) => {
          return <List key={list.id} title={list.title} cards={list.cards} />;
        })}
      </div>
    </>
  );
}

export default KanbanBoard;
