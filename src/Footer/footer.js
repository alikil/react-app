import React from 'react';

function FooterNav() {

  var footerStyle = {
    backgroundColor:"lightblue",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "inherit",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    display: 'block',
  }
  return (
    <div style={footerStyle} className="footer-copyright text-center py-3">© 2019 Powered By:
      <span>{'\u00A0'}🅰🅻🅸🅺🅸🅻 </span>
    </div>
  )
}

export default FooterNav