import React from 'react';
import "./FooterStyles.css"
import Foot1 from "../assets/nikhil.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <footer>
            <div className="footer">
            <div className="logo-container">
                        <img src={Foot1} alt="Logo" className="logo" />
                        <p>Copyright &#169; nikhilworkshere.com | All rights reserved.</p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/nikkbolte" className="fab fa-github"></a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/nikhil-patel-090177271" className="fab fa-linkedin"></a>&nbsp;&nbsp;
                        <a href="mailto:nikhilworkshere@gmail.com " className="fas fa-envelope"></a>
                    </div> 
            </div>
        </footer>
    </section>
    </>
  )
}

export default Footer
