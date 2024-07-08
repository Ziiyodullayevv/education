import { memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import TopTenCard from "../../components/cards/TopTenCard";

//function
import { lessonDays } from "../../StaticData/data";

// the hook
const TopTenMoviesToWatch = memo(() => {
  const [topTen] = useState(lessonDays);

  return (
    <Fragment>
      <SectionSlider
        title={"Darslar"}
        list={topTen}
        className="top-ten-block"
        wrapperClass={true}
        cardClass={false}
        swiperClass="iq-top-ten-block-slider"
      >
        {(data) => (
          <TopTenCard
            imagePath={data.image}
            countValue={data.count}
            link={data.path}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TopTenMoviesToWatch.displayName = "TopTenMoviesToWatch";
export default TopTenMoviesToWatch;
