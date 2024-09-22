import React from "react";
import Button from "./Button";

export default function Friend({ friend, openSplit, currSplitOpen }) {
  const friendName = friend.name[0].toUpperCase() + friend.name.slice(1);
  function handleClick() {
    if (currSplitOpen !== friend.name) openSplit(friend.name);
    else openSplit(null);
  }

  return (
    <li className={`${currSplitOpen === friend.name ? "selected" : ""}`}>
      <div className={`friend-icon`}>
        <img src={friend.src} alt={friendName} />
      </div>
      <div>
        <h3>{friendName}</h3>

        {friend.money > 0 ? (
          <span className="green">
            {friendName} owes you {friend.money} &#8377;
          </span>
        ) : friend.money < 0 ? (
          <span className="red">
            You owe {friendName} {-1 * friend.money} &#8377;
          </span>
        ) : (
          `You and ${friendName} are even`
        )}
      </div>
      <Button handleClick={handleClick}>
        {currSplitOpen === friend.name ? "close" : "select"}
      </Button>
    </li>
  );
}
