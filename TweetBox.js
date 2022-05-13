import React, { useState } from "react";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    ("posts").add({
      username: "happystark",
      displayName: "Atharva Deosthale",
      avatar:
        "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">

          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
        />
      </form>
    </div>
  );
}

export default TweetBox;