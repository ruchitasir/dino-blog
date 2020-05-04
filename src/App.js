import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment'


function App(props) {
  let formattedComments = props.post.comments.map((c,i)=>{
    return <Comment text={c} key={i}/>
  })
  let commentsLoop =[]
    for(let i=0;i<props.post.comments.length;i++){
      commentsLoop.push(<Comment text={props.post.comments[i]} />)
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.post.title}</h1>
        <p> by {props.post.author}</p>
        <p> {props.post.body}</p>
        <h2>Comments: </h2>
        <p>{props.post.comments[0]}</p>
        <p>{props.post.comments[1]} </p>
        <p>{props.post.comments[2]} </p>
       </header>
       
        <h2>Comments as a component:</h2>
        <Comment text={props.post.comments[0]} />
        <Comment text={props.post.comments[1]} />
        <Comment text={props.post.comments[2]} />
       
        <hr/>

        <h2>Comments as a component with map iterator:</h2>
          {formattedComments}

        <hr/>
        <h2>Comments as a component with for loop:</h2>
          {commentsLoop}

    </div>
  );
}

export default App;
