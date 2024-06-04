import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import Trending from "./trending/Trending";
import TopRated from "./topRated/TopRated";

import "./style.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
        {/* <div style={{ height: 1000 }}></div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
