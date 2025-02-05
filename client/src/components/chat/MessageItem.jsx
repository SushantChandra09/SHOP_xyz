import React from "react";
import PropTypes from "prop-types";
import StranderUserProfilePicture from "../../assets/stranderUserProfilePicture.jpg";

const MessageItem = ({ message, deleteMessage }) => (
  <li className="message-item">
    <div>
      <img
        src={message.pic || StranderUserProfilePicture}
        alt="User profile"
        className="chat-profile-pic"
      />
    </div>
    <div className="message-info">
      <strong className="chat-strong">{message.userName}</strong>
      <span className="message-time">{message.time}</span>
      <div className="message-text">{message.text}</div>
    </div>
    <button onClick={() => deleteMessage(message._id)}>Delete</button>
  </li>
);

MessageItem.propTypes = {
  message: PropTypes.shape({
    pic: PropTypes.string,
    userName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  deleteMessage: PropTypes.func.isRequired,
};

export default MessageItem;
