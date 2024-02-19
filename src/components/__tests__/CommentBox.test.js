import React from 'react';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
let wrapped;
beforeEach(()=>{
     wrapped = mount(<CommentBox />)

})

afterEach(()=>{
    wrapped.unmount();
})

it("has a text area and a button",()=>{

    expect(wrapped.find("Comment Box")).toBeDefined();
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

describe("the text are",()=>{

beforeEach(()=>{ wrapped.find('textarea').simulate('change',{target:{value: "new comment"}})
wrapped.update();

})  
it("has text area that users can type in",()=>{

expect(wrapped.find('textarea').text()).toContain('new comment')
 expect(wrapped.find('textarea').prop("value")).toEqual('new comment')
})

it("submit form",()=>{
    wrapped.find('form').simulate('submit');
    wrapped.update();
   expect(wrapped.find('textarea').text()).toContain('')
    expect(wrapped.find('textarea').prop("value")).toEqual('')
   })
});
