import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";

const CommentBox = (props) => {
  const [state, setState] = useState({ comment: "" });
  const handleChange = (event) => {
    setState({ comment: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.saveComment(state.comment);

    setState({ comment: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Comment Box</h4>
        <textarea value={state.comment} onChange={handleChange} />
        <div>
          <button>Submit Button</button>
        </div>
      </form>
      <button onClick={props.fetchComments}>Fetch Comments</button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
