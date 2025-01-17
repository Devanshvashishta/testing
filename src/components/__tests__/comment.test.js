import commentsReducer from "../../reducers/comments";
import { SAVE_COMMENT } from "../../actions/types";

it("handle the actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };

  const newState = commentsReducer([], action);

  expect(newState[0]).toEqual("New Comment");
});

it("handles the action of unknown type", () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});
