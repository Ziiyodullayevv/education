import React, { Fragment, memo, useState } from "react";

//react-bootstrap
import { Row, Col, Container, Button } from "react-bootstrap";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//components
import VideoJS from "../../components/plugins/VideoJs";

//function
import { lessonDays } from "../../StaticData/data";

//utilites
import { useEnterExit } from "../../utilities/usePage";

// the hook
import { useTranslation } from "react-i18next";

const MovieDetail = memo(() => {
  useEnterExit();
  const playerRef = React.useRef(null);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const params = useParams();

  const youtube = lessonDays.find((item) => item.path === params.movieId);
  return (
    <Fragment>
      {youtube.children.map((item) => (
        <div key={item.id}>
          <div className="iq-main-slider site-video ">
            <Container fluid>
              <Row>
                <Col lg="12">
                  <div className="pt-0">
                    <VideoJS
                      options={item.videoJsOptions}
                      onReady={handlePlayerReady}
                    />
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
                          <div
                            style={{ width: "200px" }}
                            className="movie-detail-select"
                          >
                            <Button style={{ width: "100%" }}>
                              Izoh Qoldiring
                            </Button>
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
