import axios from "axios";
import { useEffect, useState } from "react";
import "./OtherComp.css";
import { NavLink } from "react-router-dom";

const Memory = () => {
  const [responseData, setResponseData] = useState([]);

  const custList = () => {
    axios
      .get("http://localhost:8080/employee/components")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    custList();
  }, []);

  return (
    <div>
      <div className="Head"></div>

      <main>
        <div className="subcat">
          <h2>Memory</h2>
        </div>

        <div className="product">
          {responseData.map(
            (product) =>
              product.category === "memory" &&
              product.quantity > 0 && (
                <div className="productEach" key={product.compId}>
                  <div className="productImage">
                    <img
                      src={`/images/Memory/${product.link}.jpg`}
                      alt={product.name}
                    ></img>
                  </div>

                  <div className="productInfo">
                    <p>{product.name}</p>
                    <p>₹{product.price}</p>
                    <p>{product.description}</p>
                    <div className="buttondiv">
                      <NavLink to={"/products/IntelMotherBoard"}>
                        <button className="buttonproduct">Add To Card</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </main>
    </div>
  );
};

export default Memory;
