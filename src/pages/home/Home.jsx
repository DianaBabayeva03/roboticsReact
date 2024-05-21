import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedCard from "../../components/cards/FeaturedCard";
import FeaturedProducts from "../../components/featuredproducts/FeaturedProducts";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ImprovedProduction from "../../components/improvedproduction/ImprovedProduction";
import LatestNews from "../../components/latestnews/LatestNews";
import SomeFeatures from "../../components/somefeatures/SomeFeatures";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const addToBasket = (item) => {
    axios.post("https://664b0dc2a300e8795d44055f.mockapi.io/basket", item);
  };

  const addToWishlist = (item) => {
    axios
      .get("https://664b0dc2a300e8795d44055f.mockapi.io/wishlist")
      .then((res) => {
        const db = res.data;
        const existProduct = db.find((x) => x.id == item.id);
        if (existProduct) {
          alert("artiq var");
        } else {
          axios.post(
            "https://664b0dc2a300e8795d44055f.mockapi.io/wishlist",
            item
          );
        }
      });
  };

  return (
    <>
      <Header />
      <ImprovedProduction />
      <FeaturedProducts />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "100%",
          alignItems: "center",
        }}
      >
        {data &&
          data.map((item) => (
            <FeaturedCard
              item={item}
              onclickbasket={() => addToBasket(item)}
              onclickwish={() => addToWishlist(item)}
            />
          ))}
      </div>
      <SomeFeatures />
      <LatestNews />
      <Footer />
    </>
  );
};

export default Home;
