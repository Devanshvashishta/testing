import React,{ useState }  from 'react';

const CommentBox = () => {

    const [state,setState] = useState({comment: ""});
const handleChange = (event) => {
setState({comment: event.target.value})
}

const handleSubmit =(event) => {
    event.preventDefault();

  setState({comment: ""})
}
return (
    <form onSubmit={handleSubmit}>
        <h4>Comment Box</h4>
        <textarea value={state.comment} onChange={handleChange}/>
        <div>
        <button>Submit Button</button>
        </div>
    </form>
)
}

export default CommentBox
