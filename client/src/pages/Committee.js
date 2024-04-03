import React from "react";
import Layout from "../components/Layout";
import "../styles/OrganizingCommittee.css";
function Committee() {
  const organizingCommittee = [
    {
      role: "Patron",
      name: "Prof. Rama S. Verma",
      department: "Director",
      college: "MNNIT Allahabad",
    },
    {
      role: "Chairperson",
      name: "Head",
      department: "Department of Biotechnology",
      college: "MNNITA",
    },
    {
      role: "Treasurer",
      name: "Dr. Joybrata Mal",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
  ];

  const organizingSecretaries = [
    {
      name: "Dr. Manisha Sachan",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Seema Nara",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
  ];

  const organizingCoordinators = [
    {
      name: "Dr. Rajitha B.",
      department: "Department of Computer Science and Engineering",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Girijesh Patel",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Nirmal Ch. Roy",
      department: "Department of Electronics and Communication Engineering",
      college: "MNNIT Allahabad",
    },
  ];
  return (
    <Layout>
      <div>
        <header>
          <h1>Organizing Committee</h1>
        </header>
        <main>
          <div className="table-container">
            <h2>Organizing Committee</h2>
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Name</th>
                  <th>College</th>
                </tr>
              </thead>
              <tbody>
                {organizingCommittee.map((member, index) => (
                  <tr key={index}>
                    <td>{member.role}</td>
                    <td>
                      {member.name} , {member.department}{" "}
                    </td>
                    <td>{member.college}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h2>Organizing Secretary(s)</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>College</th>
                </tr>
              </thead>
              <tbody>
                {organizingSecretaries.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.department}</td>
                    <td>{member.college}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h2>Organizing Coordinator(s)</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>College</th>
                </tr>
              </thead>
              <tbody>
                {organizingCoordinators.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.department}</td>
                    <td>{member.college}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Committee;
