import React from "react";
import { useState } from "react";
import FriendsList from "./FriendsList";
import SplitBill from "./SplitBill";

const friends = [
  {
    src: "./images/rahul.jpg",
    name: "rahul",
    money: 0,
  },
  {
    src: "./images/shital.jpg",
    name: "shital",
    money: 0,
  },
  {
    src: "./images/sumit.jpg",
    name: "sumit",
    money: 0,
  },
];

export default function App() {
  const [friendsList, updateList] = useState(friends);
  const [currSplitOpen, setCurrSplitOpen] = useState(null);

  function openSplit(name) {
    setCurrSplitOpen(() => name);
  }

  function addFriendToList(obj) {
    updateList((friendsList) => [...friendsList, obj]);
  }

  function manageSplit(name, money) {
    updateList((friendsList) =>
      friendsList.map((friend) => {
        if (friend.name === name) {
          return {
            ...friend,
            money: friend.money + money,
          };
        }
        return friend;
      })
    );
  }

  return (
    <section className="main-section">
      <FriendsList
        friendsList={friendsList}
        addFriendToList={addFriendToList}
        openSplit={openSplit}
        currSplitOpen={currSplitOpen}
      />
      {currSplitOpen && (
        <SplitBill name={currSplitOpen} manageSplit={manageSplit} />
      )}
    </section>
  );
}
