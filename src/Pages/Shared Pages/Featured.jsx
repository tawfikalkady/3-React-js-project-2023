import React from "react";
import SectionTitle from "./SectionTitle";
import featuredImg from "../../assets/home/featured.png";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="my-12 my-featured bg-fixed py-8 text-white">
      <section className="mt-5">
        <SectionTitle subheading={"Check it out"} heading={"from our menu"} />
        <div className="md:flex justify-center items-center gap-5 md:p-8 bg-black text-white bg-opacity-30 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p>March 20, 2023</p>
            <h4 className="font-bold my-2">where can i get some?</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn btn-outline border-0 border-b-2 uppercase">
              Read more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
