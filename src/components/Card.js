import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import "../products/Products.css";

export default function Card({ product }) {
  return (
    <section className="card">
      <img src={product.img} alt={product.title} />
      <div className="card-details">
        <h3 className="card-title">{product.title}</h3>
        <section className="card-reviews">
          {product.star} {product.star} {product.star} {product.star}
          <span className="total-review">{product.reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <div>
              <del className="del-price">{product.prevPrice}</del>
              {product.newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
