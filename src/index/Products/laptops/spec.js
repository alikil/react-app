import React from 'react';
import { Card } from 'react-bootstrap'
import cards from "./laptop_list.js";

export default class CardSpec extends React.Component{
    render() {
//Не работает, разобраться с Find, react redux, Router, this.state =>
        const Cardes = {
            Cardesgg: cards.find(card => card.id === this.props.userId)
            }


    return (
    <Card className="col-lg">
    <Card.Img variant="top" src={Cardes.img}/>
    <Card.Body>
      <Card.Title className="shadowHover">{Cardes.title}</Card.Title>
      <Card.Text>
      {Cardes.content} <br></br>
      Price: {Cardes.price}$
      </Card.Text>
    </Card.Body>
  </Card>
  );
}
}