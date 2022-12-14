import React from "react";
import "./card.css";

const Card = ({children, color, showCardColor}) => {
  return (
    <div 
    className="card"
    style={{backgroundColor: color}}
    onClick={()=> showCardColor(color)}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: 'orange'
}

// const Card = (props) => {
//   return (
//     <div className="card">
//       {props.children}
//     </div>
//   );
// };
// const Card = ({title}) => {
//   return (
//     <div className="card">
//       <h3>{title || "Título"}</h3>
//       <p>esse é um texto do card</p>
//     </div>
//   );
// };
// const Card = (props) => {
//   return (
//     <div className="card">
//       <h3>{props.title || "Título"}</h3>
//       <p>esse é um texto do card</p>
//     </div>
//   );
// };

// class Card extends React.Component {
//     render() {
//         return (
//             <div className='card'>
//                 <h3>{this.props.title || 'Título'}</h3>
//                 <p>esse é um texto do card</p>
//             </div>
//         )
//     }
// }

export default Card;
