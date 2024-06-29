 
import data from "../data/products.js";
import "../styles/home.css";
import Points from "./Points.js";

const Home = () => {
  return (
    <div className="product-list">
      {data.map((product) => {
        const { url } = product;
        const newurl = require(`./${url}`);

        return (
          <div key={product.id} className="product-card">
            <img src={newurl} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <p className="product-mrp">MRP: {product.mrp}</p>
              <p className="product-discount">{product.discount}</p>

              <Points product={product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
