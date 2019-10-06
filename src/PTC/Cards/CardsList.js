import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cards from "./All_Cards_Arr.json";
export default class Legit extends React.Component {
  render() {
    const cardColumnsStyle = {padding: "10px 10px",margin: "20px", minHeight: "100%"}
    const cardStyle = {margin:'10px', padding:'5px'}
    const cardTitleStyle = {padding:"2px", textAlign:"center"}
    const cardImgStyle = {width: "12hw",display: "block",margin: "0 auto"}
    const cardtextStyle = {backgroundColor: "lightblue", textAlign:"center"}
    const linkToButton = {color: "yellow"}
    const pathStatus = String(this.props.match.params.status)
    const cardItems = cards
    .filter((card) => card.status === pathStatus)
    .map((card) =>
      <Card key={card.id} className="shadowHover col-sm-8 col-md-3 col-lg-2" style={cardStyle}>
          <div className="shadowHover" style={cardTitleStyle}>
            <a target="_blank" href={`${card.ref}`}>
            <Card.Img variant="top" src={card.img} style={cardImgStyle}/>
            <Card.Title><h3 style={{fontSize:"1.65vw"}} alt={card.title}>{card.title}</h3></Card.Title>
            </a>
          </div>
        <Card.Body style={{padding: "8px 0px"}}>
          <Card.Text style={cardtextStyle}>{card.msg}</Card.Text>
          <Link to={`/PTC/${card.status}/${card.title}`}>
            <Button variant="secondary" style={linkToButton} size="md" block>More info</Button>
          </Link>
        </Card.Body>
      </Card>
    );
    return (
      <CardColumns className="row shadowHoverActive" style={cardColumnsStyle}>
      {cardItems}
      </CardColumns>
    );
  }
}


