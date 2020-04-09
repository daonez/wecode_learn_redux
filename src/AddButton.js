import React from "react";
import { addSong } from "./store/actions";
import { connect } from "react-redux";

const AddButton = ({ addSong }) => {
  const onClick = () => {
    addSong({ title: "new song", duration: "1:00" });
  };

  return (
    <div className="main-right">
      <button className="btn" onClick={onClick}>
        노래 추가!
      </button>
    </div>
  );
};

export default connect(null, { addSong })(AddButton);
