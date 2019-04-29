import React from 'react';
import { Card } from 'react-bootstrap'
import cards from "./laptop_list.js";

export default class CardSpec extends React.Component{
    render() {
// Не работает, (разобраться с Find = ✓) (react redux = noNeed) (Router = ✓) (=> ✓)
// this.props.match.params.id (случайно сработало = ✓ , Expected '===' and instead saw '==')
// Работает если привести to Number (разобрать как получилось)

    const pathId = Number(this.props.match.params.id)

    const cardesgg = cards.find(card => card.id === pathId)

      const centerImg = {
        width: "15vw",
        display: "block",
        margin: "auto"        
      }
      const cardBord = {
        marginRight: "20px"
      }

      const speclist = cardesgg.specs.map((spec, index) =>
      <li key={index}>
        {spec}
      </li>
    );

    return (
    <Card className="col-m" style={cardBord}>
    <Card.Img variant="top" src={cardesgg.img} style={centerImg}/>
    <Card.Body>
      <Card.Title className="shadowHover">{cardesgg.title}</Card.Title>
      <Card.Text>
      {cardesgg.content} <br></br>
      Price: {cardesgg.price}$<br></br>
      {speclist}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}
}