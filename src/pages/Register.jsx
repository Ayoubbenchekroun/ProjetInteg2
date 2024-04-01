import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const navigate = useNavigate(); // Using useNavigate instead of useHistory
  const [error, setError] = useState(''); // Moved useState outside the submitHandler

  const submitHandler = (e) => {
    e.preventDefault();
  
    // Retrieve input values
    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;

    // Check if the email already exists in localStorage
    const existingUser = JSON.parse(localStorage.getItem("user"));
  
    if (existingUser && existingUser.email === email) {
      // If user already exists with the same email, display a message
      setError('Vous avez déjà un compte avec cet e-mail. Veuillez vous connecter.');
    } else {
      // Store data in local storage
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
  
      // Redirect to login page
      navigate("/login");
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Inscription" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    required
                    ref={signupNameRef}
                    autoComplete="name"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                    autoComplete="email"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    required
                    ref={signupPasswordRef}
                    autoComplete="new-password"
                  />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="addTOCart__btn">
                  Inscription
                </button>
              </form>
              <Link to="/login">
                Vous avez déjà un compte ? Connectez-vous
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
