import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap'
import { Link, BrowserRouter } from 'react-router-dom'

import cards from "./laptop_list.js";

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
      
      const cardItems = cards.map((card) =>
      <Card key={card.id} className="col-lg">
        <Card.Img variant="top" src={card.img} style={centerImg}/>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
          {card.content} <br></br>
          Price: {card.price}$
          </Card.Text>
          <BrowserRouter>
          <Button variant="secondary">
          <Link to={`/laptops/${card.id}`}>Watch more</Link>
          </Button>
          </BrowserRouter>
        </Card.Body>
      </Card>
      );
      return (
        <div style={indexPage}>
          <div className="row">
            <CardColumns>
              {cardItems}
            </CardColumns>
          </div>
        </div>
      );
    }
  }


