import { memo, Fragment } from "react";
// hero slider
import OttHeroSlider from "../../components/slider/OttHeroSlider";

// sections
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch";

//static data

const HomePage = memo(() => {
  return (
    <Fragment>
      <OttHeroSlider />
      <TopTenMoviesToWatch />
    </Fragment>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
