import { useState } from "react";
import "./App.css";
import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import productsData from "./dp/data";

function App() {
  const [selected, setSelected] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // ----------- Radio Filtering -----------

  const handleRadioInput = (e) => {
    setSelected(e.target.value === "All" ? "" : e.target.value);
  };

  // ------------ Button Filtering -----------
  const handleBtnsClick = (value) => {
    if (value === "All Products") setSelected("");
    else setSelected(value);
  };
  // ------------ Products Filtering -----------

  let filteredProducts = productsData;
  
  const filteredData = () => {
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category.toLowerCase() === selected.toLowerCase() ||
          product.company.toLowerCase() === selected.toLowerCase() ||
          product.color.toLowerCase() === selected.toLowerCase() ||
          product.newPrice.toLowerCase() === selected.toLowerCase() ||
          product.title.toLowerCase() === selected.toLowerCase()
      );
    }

    return filteredProducts;
  };

  return (
    <>
      <Nav handleInputChange={handleInputChange} />
      <Sidebar handleRadioInput={handleRadioInput} />
      <Recommended handleBtnsClick={handleBtnsClick} />
      <Products result={filteredData()} />
    </>
  );
}

export default App;
