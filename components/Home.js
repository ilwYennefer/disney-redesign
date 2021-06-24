import ImgSlider from "./ImgSlider";
import PopularResults from "./PopularResults";
import Viewers from "./Viewers";

function Home({ popularResults, trendingResults }) {
  return (
    <div className="relative min-h-home px-home overflow-x-hidden before:bg-home before:bg-center before:bg-cover before:bg-no-repeat before:bg-fixed before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-1">
      <ImgSlider />
      <Viewers />
      <PopularResults popularResults={popularResults} />
    </div>
  );
}

export default Home;
