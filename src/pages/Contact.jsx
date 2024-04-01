import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter ici la logique pour soumettre les données du formulaire
    console.log(formData);
    // Réinitialiser le formulaire après la soumission si nécessaire
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Helmet title="Contact">
      <div className="container mt-5">
        <h2>Contactez-nous</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </Helmet>
  );
};

export default Contact;