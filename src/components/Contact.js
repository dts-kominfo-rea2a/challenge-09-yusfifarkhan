// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="Card">
      <div className="CardHeader">
        <img className="Avatar" src={data.photo} alt={data.photo} />
      </div>
      <div className="CardBody">
        <h2>{data.name}</h2>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
