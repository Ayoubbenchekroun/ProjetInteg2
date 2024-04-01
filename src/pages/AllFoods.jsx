import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL"); // Initialize with "ALL"

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const searchedProduct = products.filter((item) => {
    if (searchTerm.toLowerCase() === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  // Filter products based on the selected category
  const filteredProducts = selectedCategory !== "ALL" 
  ? searchedProduct.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase()) 
  : searchedProduct;


  const productPerPage = 12;
  const pageCount = Math.ceil(filteredProducts.length / productPerPage);

  const [pageNumber, setPageNumber] = useState(0);
  const visitedPage = pageNumber * productPerPage;
  const displayPage = filteredProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="Menu" />
        
      <section>
        <Container>
          <Row>
          <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50" value={selectedCategory} onChange={handleCategoryChange}>
                  <option value="ALL">Toutes les catégories</option>
                  <option value="Pizza">Plat italien</option>
                  <option value="Plat nord Africain">Plat nord Africain</option>
                  <option value="Plat asiatique">Plat asiatique</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="Je cherche...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
           

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"précédent"}
                nextLabel={"Suivant"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;