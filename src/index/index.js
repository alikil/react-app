import React from 'react';

export default class Index extends React.Component {
    render() {

      const indexPage = {
        padding: "10px 10px",
        margin: "5px"
      }
      const fontCenter = {
        textAlign: "center",
        marginBottom: "20px"
      }
      return (
        <div style={indexPage}>
        <h2 style={fontCenter}>Best Xiaomi products</h2>
        </div>
      );
    }
}