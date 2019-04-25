import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import cards from "./bracers_list.js";

export default class Laptops extends React.Component {
    render() {

      const indexPage = {
        padding: "10px 10px",
        margin: "5px"
      }
      const centerImg = {
        width: "10vw",
        display: "block",
        margin: "0 auto"
      }

      const linkto = {
        color: "yellow"
      }


      const cardItems = cards.map((card) =>
      <Card key={card.id} className="col-lg shadowHover">
        <Card.Img variant="top" src={card.img} style={centerImg}/>
        <Card.Body>
          <Card.Title className="shadowHover">{card.title}</Card.Title>
          <Card.Text>
          {card.content} <br></br>
          Price: {card.price}$
          </Card.Text>
           <Button variant="secondary">
          <Link to={`/index/bracers/${card.id}`} style={linkto}>Watch more</Link>
          </Button>
        </Card.Body>
      </Card>
      );
      return (
        <div style={indexPage}>
          <div className="row shadowHoverActive">
            <CardColumns>
              {cardItems}
            </CardColumns>
          </div>
        </div>
      );
    }
  }


