import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const FooterMega = memo(() => {
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
      setAnimationClass("animate__fadeIn");
    } else {
      setAnimationClass("animate__fadeOut");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return (
    <>
      <Fragment>
        <footer className="footer footer-default">
          <Container fluid>
            <div className="footer-bottom border-top">
              <Row className="align-items-center">
                <Col md={6}>
                  <p className="font-size-14">
                    © <span className="currentYear">2024</span>{" "}
                    <span className="text-primary">STREAMIT</span>. Inc. All
                    rights reserved
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </footer>
        <div
          id="back-to-top"
          style={{ display: "none" }}
          className={`animate__animated ${animationClass}`}
          onClick={scrollToTop}
        >
          <Link
            className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle"
            id="top"
            to="#top"
          >
            <i className="fa-solid fa-chevron-up"></i>
          </Link>
        </div>
      </Fragment>
    </>
  );
});

FooterMega.displayName = "FooterMega";
export default FooterMega;
