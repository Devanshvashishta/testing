import React from "react";
import ReactDOM from "react-dom";
import App from '../App';
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapped;

beforeEach(()=>{
     wrapped = shallow(<App />)
})

// it("shows a comment box",()=>{
//     const div = document.createElement('div');

//     ReactDOM.render(<App />, div);
//     expect(div.innerHTML).toContain("Comment Box")

//     ReactDOM.unmountComponentAtNode(div);                   
// })

it("shows a comment box new way",()=>{


    expect(wrapped.find(CommentBox).length).toEqual(1);
    expect(wrapped.find(CommentList).length).toEqual(1);
}
)
