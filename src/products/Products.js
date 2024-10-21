import React from "react";
import "./Products.css";
import Card from "../components/Card";

export default function Products({ result }) {
  return (
    <>
      <section className="card-container">
        {result.map((product) => (
          <Card key={product.title} product={product} />
        ))}
      </section>
    </>
  );
}
