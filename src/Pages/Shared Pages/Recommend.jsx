import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { data } from "autoprefixer";

const Recommend = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section>
      <SectionTitle subheading={"should try"} heading={"chef recommended"} />
      <div className="grid md:grid-cols-3 my-12">
        {items.slice(0, 3).map((item) => (
          //   <h1>{item.name}</h1>
          <div className="card w-96 bg-base-100 shadow-xl" key={item._id}>
            <figure>
              <img
                src={item.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{item?.name}</h2>
              <p className="text-center">{item?.recipe}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommend;
