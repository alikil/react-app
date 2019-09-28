import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap'
import cards from "./All_Cards_Arr.json";

export default class CardSpec extends React.Component{
  render() {
    const pathId = String(this.props.match.params.id)
    const cardesgg = cards.find(card => card.title === pathId)
    const Speclist = cardesgg.specs.map((spec, index) => <li key={index}>{spec}</li>)
    const CardPlus = cardesgg.Plus.map((plus, index) => <li key={index}>{plus}</li>)
    const Defense = cardesgg.defence.map((defence, index) => <li key={index}>{defence}</li>)
    const centerImg = {width:"20vw",display:"block",margin:"auto"}
    const cardBord = {backgroundColor:"transparent",margin:"18px",padding:"5px"}
    const cardTitle = {textAlign:"center", padding:"5px", backgroundColor:"white", opacity:"0.8"}
    const cardText = {backgroundColor:"white",opacity:"0.9",padding:"15px 20px"}
    const cardBack = {listStyle:"square", padding:"5px", marginLeft:"15px"}
    const cardCol = {backgroundColor:"lightgreen", color:"steelblue", opacity:"0.9", margin:"0px 15px"}

    return (
      <Card className="shadowHoverActive" style={cardBord}>
        <Container style={{padding:"10px 20px"}}>
          <Row>
            <Col style={cardCol}>
              <strong style={{fontSize:"20px"}}>Plus +</strong>
              <hr style={{margin:"5px"}}></hr>
                <ul style={cardBack}>
                  {CardPlus}
                </ul>
            </Col>
            <Col>
              <a target="_blank" href={`${cardesgg.ref}`}>
              <Card.Img variant="top" src={cardesgg.img} style={centerImg} alt={cardesgg.title}/>
              </a>
            </Col>
            <Col style={cardCol}>
              <strong style={{fontSize:"20px"}}>Defense</strong>
              <hr style={{margin:"5px"}}></hr>
                <ul style={cardBack}>
                  {Defense}
                </ul>
            </Col>
          </Row>
        </Container>
        <Card.Body style={{paddingTop:"5px"}}>
          <a target="_blank" href={`${cardesgg.ref}`}>
          <Card.Title className="shadowHover" style={cardTitle}><h3>{cardesgg.title}</h3></Card.Title>
          </a>
          <Card.Text style={cardText}>{cardesgg.msg}{Speclist}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}