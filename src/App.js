import React from "react";
import Greeting from "./Greeting";
import Comment from "./Comment";

function App() {
    const comment ={
        name : 'Andrey',
        avatarUrl: 'https://source.unsplash.com/random',
        text: 'это мой коммент',
        date: '12-15-2021'
    }
    return (
        <>
            <Greeting name ='Андрей' age= '25' />
            <Greeting name ='Матвей' age = '37' />
            <Comment author ={comment} text ={comment.text} date ={comment.date}/>
        </>
    );
}

export default App