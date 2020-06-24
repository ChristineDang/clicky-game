import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
// import card from "./components/cards/cards.css"

// const card = props => {
//     <div className="card" onClick = {() =. props.clickedImage(props.id)}>
//         <div className="img-container">
//             <img alt={props.cards} src={props.image} />
//         </div>
//     </div>
// }

  
ReactDom.render(
<App />,
 document.getElementById('root')
 );