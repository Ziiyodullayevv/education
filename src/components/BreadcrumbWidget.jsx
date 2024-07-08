import { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//function

//hook
import { useTranslation } from "react-i18next";

const BreadCrumbWidget = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div
        className="iq-breadcrumb"
        style={{
          backgroundImage: `url(https://aragonresearch.com/wp-content/uploads/2019/09/Using-Metrics-To-Measure-The-Business-Value-of-Your-Investments-1.jpg)`,
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col sm="12">
              <nav className="text-center">
                <h2
                  className={`title ${
                    props.class === false ? "" : "text-capitalize"
                  }`}
                >
                  {t(props.title)}
                </h2>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

BreadCrumbWidget.displayName = "BreadCrumbWidget";
export default BreadCrumbWidget;
