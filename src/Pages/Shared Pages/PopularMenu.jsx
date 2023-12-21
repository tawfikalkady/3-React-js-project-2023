import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { key } from "localforage";
import MenuItem from "../MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data?.filter(
          (items) => items.category === "popular"
        );
        // console.log(popularItems)
        setMenu(popularItems);
      });
  }, []);

  // console.log(menu)

  return (
    <section>
      <SectionTitle
        subheading="check it out"
        heading="from our menu"
      ></SectionTitle>
      <div className="md:grid grid-cols-2 gap-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="w-full mx-auto text-center my-5">
        <button className="btn btn-outline border-0 border-b-2 uppercase">
          view full menu
        </button>
      </div>

      <div className="bg-black my-12">
        <h4 className="py-20 text-center text-3xl text-white">
          Call Us: +2 012 71 72 71 91
        </h4>
      </div>
    </section>
  );
};

export default PopularMenu;
