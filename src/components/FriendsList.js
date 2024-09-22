import React, { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import Button from "./Button";

export default function FriendsList({
  friendsList,
  addFriendToList,
  openSplit,
  currSplitOpen,
}) {
  const [canAddFriend, toggleAddFriend] = useState(false);

  function handleClick() {
    toggleAddFriend(() => !canAddFriend);
  }

  return (
    <div className="friends-section">
      <ul className="friends-list">
        {friendsList.map((friend) => (
          <Friend
            friend={friend}
            key={friend.name}
            openSplit={openSplit}
            currSplitOpen={currSplitOpen}
          />
        ))}
      </ul>
      <div className="friend-section--btn">
        <Button handleClick={handleClick}>
          {canAddFriend ? "Close" : "Add Friends"}
        </Button>
      </div>
      {canAddFriend && <AddFriend addFriendToList={addFriendToList} />}
    </div>
  );
}
