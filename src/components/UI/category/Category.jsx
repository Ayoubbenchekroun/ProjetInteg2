import React from "react";

import { Container, Row, Col } from "reactstrap";


import categoryImg02 from "../../../assets/images/hamburger.png";
import categoryImg03 from "../../../assets/images/bread.png";
import categoryImg04 from "../../../assets/images/pizza.png";

import "../../../styles/category.css";

const categoryData = [
 
  {
    
    display: "Plats italien ",
    imgUrl: categoryImg04,
  },

  {
    display: "Plats Asiatique ",
    imgUrl: categoryImg03,
  },

  {
    display: "Plats Nord African ",
    imgUrl: categoryImg02,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
