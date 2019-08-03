import React from 'react';
import Background from './background.jpg';

export default class Index extends React.Component {
    render() {
      const indexPage = {
        padding: "10px 10px",
        margin: "5px",
        backgroundImage: `url(${Background})`
      }
      return (
        <div style={indexPage} className="opacityTr">
        <h1 style={{textAlign: "center"}}>Best PTC Sites</h1>
        </div>
      );
    }
}