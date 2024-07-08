import { Fragment, memo } from "react";

//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import CardStyle from "../components/cards/CardStyle";
import BreadCrumbWidget from "../components/BreadcrumbWidget";

//function
import { lessonDays } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ViewAll = memo(() => {
  return (
    <Fragment>
      <BreadCrumbWidget title={"Barcha Darslar"} />
      <div className="section-padding">
        <Container fluid>
          <div className="card-style-grid">
            <Row className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
              {lessonDays.map((item, index) => (
                <Col key={index} className="mb-4">
                  <CardStyle
                    image={item.image}
                    title={item.title}
                    link={item.path}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

ViewAll.displayName = "ViewAll";
export default ViewAll;
