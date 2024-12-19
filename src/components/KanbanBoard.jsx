import React, { useEffect, useState } from "react";
import "./KanbanBoard.scss";
import List from "./List";
import { nanoid } from "nanoid";

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

  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isCreateListModalOpen, setIsCreateListModalOpen] = useState(false);

  const [listIndex, setListIndex] = useState(0);
  const [title, setTitle] = useState("");

  const handleAddCard = (e) => {
    e.preventDefault();
    setIsCardModalOpen(false);
    let newboard = [...board];
    newboard[listIndex].cards.push({
      id: nanoid(),
      title,
    });
    setTitle("");
    setBoard(newboard);
  };

  const toggleCardModal = (index) => {
    setListIndex(index);
    setIsCardModalOpen(true);
  };

  const handleCreateList = (e) => {
    e.preventDefault();
    setIsCreateListModalOpen(false);
    setBoard((prev) => [
      ...prev,
      {
        id: nanoid(),
        title: title,
      },
    ]);
    setTitle("");
  };

  const deleteList = (listId) => {
    let newBoard = board.filter((list) => list.id !== listId);
    setBoard(newBoard);
  };

  useEffect(() => {
    initializeBoard();
  }, []);

  return (
    <>
      <button
        className="create-list-btn"
        onClick={() => setIsCreateListModalOpen(true)}
      >
        Create List
      </button>
      <div className="board">
        {board.map((list, index) => {
          return (
            <List
              key={list.id}
              id={list.id}
              title={list.title}
              cards={list.cards}
              toggleCardModal={() => {
                toggleCardModal(index);
                setIsCardModalOpen(true);
              }}
              deleteList={deleteList}
            />
          );
        })}
      </div>

      {isCardModalOpen && (
        <div className="modal">
          <form className="modal__details" onSubmit={handleAddCard}>
            <label htmlFor="card-title-input"></label>
            Card Title
            <input
              type="text"
              id="card-title-input"
              value={title}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            <input type="submit" value="Add Card" />
          </form>
        </div>
      )}

      {isCreateListModalOpen && (
        <div className="modal">
          <form className="modal__details" onSubmit={handleCreateList}>
            <label htmlFor="list-title-input"></label>
            List Title
            <input
              type="text"
              id="list-title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            <input type="submit" value="Add List" />
          </form>
        </div>
      )}
    </>
  );
}

export default KanbanBoard;
