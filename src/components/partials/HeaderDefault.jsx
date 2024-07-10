import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import {
  Button,
  Navbar,
  Offcanvas,
  Container,
  Dropdown,
} from "react-bootstrap";

// react-router-dom
import { Link, useLocation, useNavigate } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

import { theme_scheme_direction } from "../../store/setting/actions";

// components
import Logo from "../logo";
import CustomToggle from "../CustomToggle";

// the hook
import { useTranslation } from "react-i18next";

// img
import user from "/assets/images/user/user1.webp";
import ott from "/assets/images/mega-menu/new-home.webp";
import home from "/assets/images/mega-menu/home.webp";
import movie from "/assets/images/mega-menu/movie.webp";
import tvshow from "/assets/images/mega-menu/tv-show.webp";
import video from "/assets/images/mega-menu/video.webp";
import shop from "/assets/images/mega-menu/shop-home.webp";

const HeaderDefault = memo(() => {
  const dispatch = useDispatch();
  const [isMega, setIsMega] = useState(true);
  const location = useLocation();

  //for translation
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    if (lng === "ar") {
      dispatch(theme_scheme_direction("rtl"));
    } else {
      dispatch(theme_scheme_direction("ltr"));
    }
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerSticky = document.querySelector(".header-sticky");
      if (headerSticky) {
        if (window.scrollY > 1) {
          headerSticky.classList.add("sticky");
        } else {
          headerSticky.classList.remove("sticky");
        }
      }
    };

    const updateIsMega = () => {
      setIsMega(location.pathname === "/");
    };

    window.addEventListener("scroll", handleScroll);
    updateIsMega();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Fragment>
      <header className="header-center-home header-default header-sticky">
        <Navbar
          expand="xl"
          className="nav navbar-light iq-navbar header-hover-menu py-xl-0"
        >
          <Container fluid className="navbar-inner">
            <div className="d-flex align-items-center justify-content-between w-100 landing-header">
              <div className="d-flex gap-3 gap-xl-0 align-items-center">
                <Link to={"/"}>
                  l
                  <img
                    style={{ maxWidth: "120px", width: "100%" }}
                    src="https://i.postimg.cc/NM135YYx/logo-logo-1.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <Navbar
                expand="xl"
                className={`offcanvas mobile-offcanvas nav hover-nav horizontal-nav py-xl-0 ${
                  show1 === true ? "show" : ""
                } ${isMega ? "mega-menu-content" : ""}`}
                style={{
                  visibility: `${show1 === true ? "visible" : "hidden"}`,
                }}
                id="navbar_main"
              >
                <Container fluid className="container-fluid p-lg-0">
                  <Offcanvas.Header
                    className="px-0"
                    closeButton
                    onHide={() => setShow1(false)}
                  >
                    <div className="navbar-brand ms-3">
                      <Logo></Logo>
                    </div>
                  </Offcanvas.Header>
                </Container>
              </Navbar>

              <div className="right-panel">
                <Button
                  id="navbar-toggle"
                  bsPrefix="navbar-toggler"
                  type="button"
                  aria-expanded={show}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  onClick={() => setShow(!show)}
                >
                  <span className="navbar-toggler-btn">
                    <span className="navbar-toggler-icon"></span>
                  </span>
                </Button>
                <div
                  className={`navbar-collapse collapse ${show ? "show" : ""}`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav align-items-center ms-auto mb-2 mb-xl-0 gap-3">
                    <Dropdown
                      as="li"
                      className="nav-item dropdown iq-responsive-menu"
                    >
                      <div className="search-box">
                        <ul
                          className={`dropdown-menu p-0 dropdown-search m-0 iq-search-bar ${
                            show2 ? "show" : ""
                          }`}
                          style={{ width: "10rem" }}
                          data-bs-popper="static"
                        >
                          <li className="p-0">
                            <div className="form-group input-group mb-0">
                              <input
                                type="text"
                                className="form-control border-0"
                                placeholder={t("blogs.search")}
                              />
                              <button
                                onClick={() => setShow2(!show2)}
                                type="submit"
                                className={` search-submit ${
                                  show === false ? "show" : ""
                                }`}
                              >
                                <svg
                                  className="icon-15"
                                  width="15"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="11.7669"
                                    cy="11.7666"
                                    r="8.98856"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></circle>
                                  <path
                                    d="M18.0186 18.4851L21.5426 22"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </li>
                        </ul>
                        <Dropdown.Menu
                          as="ul"
                          className="p-0 dropdown-search m-0 iq-search-bar"
                          style={{ width: "20rem" }}
                        >
                          <li className="p-0">
                            <div className="form-group input-group mb-0">
                              <input
                                type="text"
                                className="form-control border-0"
                                placeholder="t('header.search_dot')"
                              />
                              <button type="submit" className="search-submit">
                                <svg
                                  className="icon-15"
                                  width="15"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="11.7669"
                                    cy="11.7666"
                                    r="8.98856"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></circle>
                                  <path
                                    d="M18.0186 18.4851L21.5426 22"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </li>
                        </Dropdown.Menu>
                      </div>
                    </Dropdown>
                    <Dropdown as="li" className="nav-item">
                      <Dropdown.Toggle
                        as={CustomToggle}
                        href="#"
                        variant=" nav-link d-flex align-items-center px-0"
                        size="sm"
                        id="dropdownMenuButton1"
                      >
                        <div className="btn-icon rounded-pill user-icons">
                          <span className="btn-inner">
                            <svg
                              className="icon-18"
                              width="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M19.2036 8.66919V12.6792"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M21.2497 10.6741H17.1597"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        as="ul"
                        className="dropdown-menu-end dropdown-user border-0 p-0 m-0"
                      >
                        <li className="user-info d-flex align-items-center gap-3 mb-3">
                          <svg
                            className="icon-18"
                            width="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="font-size-14 fw-500 text-capitalize text-white">
                            {user?.firstName || "Anonymous"}
                          </span>
                        </li>

                        <li>
                          <button
                            onClick={logOut}
                            style={{ background: "gray", width: "100%" }}
                            className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              {t("header.logout")}
                            </h6>
                          </button>
                        </li>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
});

HeaderDefault.displayName = "HeaderDefault";
export default HeaderDefault;
