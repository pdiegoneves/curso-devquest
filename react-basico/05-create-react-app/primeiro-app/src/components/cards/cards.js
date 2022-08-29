import Card from "../card/card";

const cardsTitle = ["Título Card 1", "Título Card 2", "Título Card 3"];


const showCardColor = (color) => {
  alert(color)
}

const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>

      <div>
        {cardsTitle.map((cardTitle, index) => (
          <Card key={index} showCardColor={showCardColor}>
            <h3>{cardTitle}</h3>
            <p>este é o texto de um card</p>
          </Card>
        ))}
        <Card color='blue' showCardColor={showCardColor}>
            <h3>Card com fundo azul</h3>
            <p>este é o texto de um card</p>
        </Card>
      </div>
    </div>
  );
};
// const Cards = () => {
//   return (
//     <>
//       <div>
//         <h2>Meus Cards</h2>
//       </div>
//       <div>
//         <Card>
//           <h3>Título Card 1</h3>
//           <p>esse é um texto do card</p>
//         </Card>
//         <Card>
//           <h3>Título Card 2</h3>
//           <p>esse é um texto do card</p>
//         </Card>
//         <Card>
//           <h3>Título Card 3</h3>
//           <p>esse é um texto do card</p>
//         </Card>
//       </div>
//     </>
//   );
// };

export default Cards;
