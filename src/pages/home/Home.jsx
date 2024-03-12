import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import Trending from "./trending/Trending";
import TopRated from "./topRated/TopRated";

import "./style.scss";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {/* <div style={{ height: 1000 }}></div> */}
    </div>
  );
};

export default Home;
