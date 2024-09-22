import React, { useState } from "react";
import Button from "./Button";

export default function AddFriend({ addFriendToList }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (name !== "" && url !== "") {
      const obj = {
        src: url,
        name: name,
        money: 0,
      };
      addFriendToList(obj);
    }
  }

  return (
    <form className="addFriends" onSubmit={(e) => handleClick(e)}>
      <div>
        <label htmlFor="name">
          <span>👯</span> Friends Name :
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="url">
          <span>🖼️</span> Image URL :{" "}
        </label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <Button handleClick={handleClick}>Add</Button>
    </form>
  );
}
