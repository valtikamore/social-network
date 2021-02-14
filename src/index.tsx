import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type postType = {
    id:number
    message:string
    likeCount:number
}
let posts:postType[] = [
    {id:1,message:'Hello bro',likeCount:0},
    {id:2,message:'Hello bro',likeCount:1},
    {id:3,message:'Hello bro',likeCount:2},
]
export type dialogType = {
    id:number
    name:string
}
let dialogs: dialogType[] = [
    {id: 1, name: "Valentine"},
    {id: 2, name: "Natasha"},
    {id: 3, name: "Abrahima"},
]
export type messageType = {
    id:number
    message:string
}
let messages:messageType[] = [
    {id: 1, message: 'Hihihihih'},
    {id: 2, message: 'How is your s ds'},
    {id: 3, message: 'Hihihihih'},
]
ReactDOM.render(
  <React.StrictMode>
    <App postsData={posts}
         dialogsData={dialogs}
         messagesData={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
