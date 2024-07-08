import { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
const CardStyle = memo(({ title, link, image }) => {
  return (
    <Fragment>
      <div className="iq-card card-hover">
        <div className="block-images position-relative w-100">
          <div className="img-box w-100">
            <Link
              to={`/${link}`}
              className="position-absolute top-0 bottom-0 start-0 end-0"
            ></Link>
            <img
              src={image}
              alt="movie-card"
              className="img-fluid object-cover w-100 d-block border-0"
            />
          </div>
          <div className="card-description with-transition">
            <div className="cart-content">
              <div className="content-left">
                <h5 className="iq-title text-capitalize">
                  <Link to={`/${link}`}>{title}</Link>
                </h5>
              </div>
              <div className="watchlist"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

CardStyle.displayName = "CardStyle";
export default CardStyle;
