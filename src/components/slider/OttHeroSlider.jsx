import React, { memo, Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import CustomButton from "../CustomButton";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";

const OttHeroSlider = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      if (themeSchemeDirection == "rtl") {
        const wrapperclass = document.getElementsByClassName("swiper-wrapper");
        wrapperclass[0].classList.add("swiper-rtl-wrapper");
        const classaccess =
          document.getElementsByClassName("swiper-rtl-wrapper");
        //  console.log(classaccess)
        classaccess[0].childNodes.forEach((element) => {
          if (element.classList.contains("swiper-slide-active")) {
            document
              .getElementById("iq-small-rtl-swiper")
              .parentElement.removeAttribute("class");
            document
              .getElementById("iq-small-rtl-swiper")
              .parentElement.classList.add(
                "swiper-wrapper",
                "swiper-rtl-wrapper"
              );
            switch (element.getAttribute("data-swiper-small-slide-index")) {
              case "small-one":
                element.parentNode.classList.add("iq-small-rtl");
                break;
              case "small-two":
                element.parentNode.classList.add("iq-small-rtl-one");
                break;
              case "small-three":
                element.parentNode.classList.add("iq-small-rtl-two");
                break;
            }
          }
        });
        wrapperclass[1].classList.add("swiper-rtl-wrapper");
        classaccess[1].childNodes.forEach((element) => {
          if (element.classList.contains("swiper-slide-active")) {
            document.getElementById("1").parentElement.removeAttribute("class");
            document
              .getElementById("1")
              .parentElement.classList.add(
                "swiper-wrapper",
                "swiper-rtl-wrapper"
              );
            switch (parseInt(element.getAttribute("data-swiper-slide-index"))) {
              case 0:
                element.parentNode.classList.add("iq-rtl");
                break;
              case 1:
                element.parentNode.classList.add("iq-rtl-one");
                break;
              case 2:
                element.parentNode.classList.add("iq-rtl-two");
                break;
            }
          }
        });
      }

      return () => {
        if (document.getElementById("1")) {
          document.getElementById("1").parentElement.removeAttribute("class");
          document
            .getElementById("1")
            .parentElement.classList.add("swiper-wrapper");
        }
        if (document.getElementById("iq-small-rtl-swiper")) {
          document
            .getElementById("iq-small-rtl-swiper")
            .parentElement.removeAttribute("class");
          document
            .getElementById("iq-small-rtl-swiper")
            .parentElement.classList.add("swiper-wrapper");
        }
      };
    }
  }, [active, themeSchemeDirection]);

  const banner = [
    {
      id: 1,
      path: "pv13",
      title: "Fibonacci",
      description:
        "After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension rises following a tragic loss. Meanwhile, Daemon prepares for war.",
      imgUrl: "https://i.postimg.cc/WpZytxXk/13-kun-1-qism.jpg",
    },
    {
      id: 2,
      path: "pv14",
      title: "Prop Trading",
      description:
        "After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension rises following a tragic loss. Meanwhile, Daemon prepares for war.",
      imgUrl: "https://i.postimg.cc/D0hKphBt/15-kun-1qism.png ",
    },
    {
      id: 3,
      path: "pv9",
      title: "Bozor Trandlari",
      description:
        "After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons. Rhaenyra tries to hold the realm together as the tension rises following a tragic loss. Meanwhile, Daemon prepares for war.",
      imgUrl: "https://i.postimg.cc/VL4K2wKX/9-kun-1-qism.jpg",
    },
  ];

  return (
    <Fragment>
      <div className="iq-banner-thumb-slider">
        <div className="slider">
          <div className="position-relative slider-bg d-flex justify-content-end">
            <div className="position-relative my-auto">
              <div
                className="horizontal_thumb_slider"
                data-swiper="slider-thumbs-ott"
              >
                <div className="banner-thumb-slider-nav">
                  <Swiper
                    dir={themeSchemeDirection}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    autoplay={{
                      delay: 1000,
                      // disableOnInteraction: true,
                    }}
                    direction="horizontal"
                    navigation={{
                      prevEl: ".slider-prev",
                      nextEl: ".slider-next",
                    }}
                    spaceBetween={24}
                    loop={true}
                    slidesPerView={2}
                    breakpoints={{
                      0: {
                        direction: "horizontal",
                        slidesPerView: 1,
                      },
                      768: {
                        direction: "horizontal",
                        slidesPerView: 2,
                      },
                    }}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="swiper-horizontal swiper-container mb-0"
                    id="responsive-rtl-swiper"
                  >
                    {banner.map((item) => (
                      <SwiperSlide
                        key={item.id}
                        className="swiper-bg"
                        id="iq-small-rtl-swiper"
                        data-swiper-small-slide-index="small-one"
                      >
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src={item.imgUrl}
                              className="img-fluid"
                              alt=""
                              loading="lazy"
                            />
                            <div className="block-description">
                              <h6 className="iq-title fw-500 mb-0">
                                {banner.title}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div
                    className="slider-prev swiper-button"
                    onClick={() => setActive(!active)}
                  >
                    <i className="iconly-Arrow-Left-2 icli"></i>
                  </div>
                  <div
                    className="slider-next swiper-button"
                    onClick={() => setActive(!active)}
                  >
                    <i className="iconly-Arrow-Right-2 icli"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slider-images iq-rtl-thumb-swiper"
              data-swiper="slider-images-ott"
            >
              <Swiper
                dir={themeSchemeDirection}
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                modules={[Navigation, Thumbs]}
                watchSlidesProgress={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                data-swiper-slide-index="0"
                breakpoints={{
                  0: {
                    allowTouchMove: true,
                  },
                  768: {
                    allowTouchMove: true,
                  },
                  1025: {
                    allowTouchMove: false,
                  },
                  1500: {
                    allowTouchMove: false,
                  },
                }}
                allowTouchMove={false}
                loop={true}
                className="swiper-container"
                id="iq-rtl-thumb-swiper"
              >
                {banner.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="p-0"
                    id="1"
                    data-swiper-slide-index="0"
                  >
                    <div className="slider--image block-images">
                      <img src={item.imgUrl} loading="lazy" alt="banner" />
                    </div>
                    <div className="description">
                      <div className="row align-items-center h-100">
                        <div className="col-lg-6 col-md-12">
                          <div className="slider-content">
                            <div className="d-flex align-items-center RightAnimate mb-3"></div>
                            <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                              {item.title || "Anonymous"}
                            </h1>
                            <p className="line-count-3 RightAnimate-two">
                              {t("ott_home.after_death")}
                            </p>
                          </div>
                          <CustomButton
                            buttonTitle={"Boshlash"}
                            link={item.path}
                            linkButton="false"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

OttHeroSlider.displayName = OttHeroSlider;
export default OttHeroSlider;
