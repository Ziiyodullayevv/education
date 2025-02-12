import React, { Fragment, memo } from "react";

import ReactPlayer from "react-player/vimeo";

//react-bootstrap
import { Row, Col, Container, Button } from "react-bootstrap";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//function
import { lessonDays } from "../../StaticData/data";

//utilites
import { useEnterExit } from "../../utilities/usePage";

// the hook

const MovieDetail = memo(() => {
  const params = useParams();

  const youtube = lessonDays.find((item) => item.path === params.movieId);

  console.log(youtube.children);

  const videoJsOptions = {
    url: "https://vimeo.com/981936111",
    controls: true,
    width: "100%",
    height: "100%",
    config: {
      vimeo: {
        playerOptions: {
          autoplay: false,
          controls: true,
          responsive: true,
          iv_load_policy: 1,
        },
      },
    },
  };

  return (
    <Fragment>
      <Container fluid>
        <h2
          style={{ marginTop: "90px" }}
          className="trending-text fw-bold texture-text text-uppercase fadeInLeft animated d-inline-block"
        >
          {youtube.title}
        </h2>
      </Container>
      {youtube.children.map((item) => (
        <div key={item.id}>
          <div className="iq-main-slider site-video ">
            <Container fluid>
              <Row>
                <Col lg="12">
                  <div className="pt-0">
                    <div
                      style={{
                        position: "relative",
                        paddingTop: "56.25%",
                        marginTop: "1rem",
                      }}
                    >
                      <ReactPlayer
                        {...{
                          url: `${item.url}`,
                          controls: true,
                          width: "100%",
                          height: "100%",
                          config: {
                            vimeo: {
                              playerOptions: {
                                autoplay: false,
                                controls: true,
                                responsive: true,
                                iv_load_policy: 1,
                              },
                            },
                          },
                        }}
                        style={{ position: "absolute", top: "0", left: 0 }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="details-part">
            <Container fluid>
              <Row>
                <Col lg="12">
                  <div className="trending-info mt-4 pt-0 pb-4">
                    <Row>
                      <Col md="12" className="mb-auto">
                        <div className="d-block d-lg-flex align-items-center">
                          <h2 className="trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block">
                            {item.title}
                          </h2>
                          <div className="slider-ratting d-flex align-items-center ms-lg-3 ms-0"></div>
                        </div>

                        <div className="d-flex align-items-center gap-4 flex-wrap mt-4 mb-4">
                          <ul className="list-inline p-0 share-icons music-play-lists mb-n2 mx-n2">
                            <li>
                              <span>
                                <i className="fa-solid fa-download"></i>
                              </span>
                            </li>
                          </ul>
                          <div>
                            <Link to={"/comments"} style={{ width: "100%" }}>
                              <Button>Izoh Qoldiring</Button>
                            </Link>
                          </div>
                        </div>
                      </Col>

                      <p
                        style={{
                          boxShadow: "0px .5px 0 gray",
                          marginBottom: "30px",
                          paddingBottom: "60px",

                          width: "100%",
                        }}
                      >
                        {item.description}
                      </p>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      ))}
    </Fragment>
  );
});

MovieDetail.displayName = "MovieDetail";
export default MovieDetail;
