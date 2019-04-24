import React from 'react';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  }
  
  var social = {
    color: "white",
    fontSize: "30px",
    opacity: "0.6",
    transition: "0.3s",
  }

  function Footer() {
    return (
        <div>
            <div style={style}>
                <div style={social}>
                    <a href="/#" className="support">Contact Us</a>|    |
                    <a href="/#" className="face">Facebook </a>|    |
                    <a href="/#" className="tweet">Twitter</a>|    |
                    <a href="/#" className="linked">LinkedIn</a>
                </div>
            </div>
        </div>
    )
  }

export default Footer