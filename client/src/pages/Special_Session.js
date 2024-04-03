import React from "react";
import Layout from "../components/Layout";
import "../styles/SpecialSessions.css";
function Special_Session() {
  return (
    <Layout>
      <div className="special-sessions-container">
        <h2>Special Sessions</h2>
        <div className="session">
          <h3>
            SS01: eXplainable Artificial Intelligence (XAI) for Cyber-Physical
            Systems
          </h3>
          <p>
            <strong>Organizers:</strong>
          </p>
          <ul>
            <li>
              Dr. Ramanujam E., Assistant Professor, Department of Computer
              Science and Engineering, National Institute of Technology Silchar,
              Assam, India - 788010
            </li>
            <li>
              Dr. Abirami A M., Associate Professor, Department of Information
              Technology, Thiagarajar College of Engineering, Madurai, Tamil
              Nadu, India - 625015
            </li>
          </ul>
        </div>
        <div className="session">
          <h3>
            SS02: Smart Technologies for Sustainable Energy, Environment and
            Transportation System
          </h3>
          <p>
            <strong>Organizers:</strong>
          </p>
          <ul>
            <li>
              Dr. Shailendra Singh, Department of Electrical Engineering,
              National Institute of Technology Agartala, Tripura
            </li>
            <li>
              Dr. Sadhan Gope, Department of Electrical Engineering, National
              Institute of Technology Agartala, Tripura
            </li>
            <li>
              Dr. Padmagirisan P., Department of Electrical Engineering,
              National Institute of Technology Agartala, Tripura
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Special_Session;
