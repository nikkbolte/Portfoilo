import "./ProjectStyles.css";
import React from 'react'
import CMGS from "../assets/comingsoon.jpg";

const Projects = () => {
  return (
    <div>
      <section className="thirdSection" id="services">
                <h2 className="text-center">Projects : </h2><br/>
                <div className="card-container">
                    <div className="card" >
                        <div className="card-body">
                        <img className='Comingsoon' src={CMGS} alt="ComingSoon" />
                            <h5 className="card-title"> Buyme</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">E-commerce</h6>
                            <p className="card-text">Building an E-commerce Web applications using ReactJs and Firebase </p> 
                            <a href="#" className="card-link">View</a>
                            <a href="#" className="card-link" >Source</a>
                        </div>
                    </div>

                    <div className="card" >
                        <div className="card-body">
                        <img className='Comingsoon' src={CMGS} alt="ComingSoon" />
                            <h5 className="card-title">Fly High : </h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Flights booking</h6>
                            <p className="card-text">Building an Ticket Booking Portal Application </p>
                            <a href="#" className="card-link">View</a>
                            <a href="#" className="card-link">Source</a>
                        </div>
                    </div>

                    <div className="card" >
                        <div className="card-body">
                        <img className='Comingsoon' src={CMGS} alt="ComingSoon" />
                            <h5 className="card-title">Fit-With-Me</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Fitness App</h6>
                            <p className="card-text">Building an Fitness web application for Home-based Workout Tracking. </p>
                            <a href="#" className="card-link">View</a>
                            <a href="#" className="card-link" >Source</a>
                        </div>
                    </div>
                    </div>
                </section>
    </div>
  )
}

export default Projects
