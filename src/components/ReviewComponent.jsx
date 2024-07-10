import React, { Fragment, memo, useState } from "react";

// react-bootstrap
import { Button, Form, Row, Col } from "react-bootstrap";

// hook
import { useNavigate } from "react-router-dom";

const ReviewComponent = memo(() => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const TELEGRAM_BOT_TOKEN = "6843683663:AAFNOjam2-zo260-eqYGt2JWGkQ_DGSZscM";
    const CHAT_ID = "961047307";
    const message = `Ism: ${name}\nGmail: ${email}\nComment: ${comment}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const data = {
      chat_id: CHAT_ID,
      text: message,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Xabar yuborildi!");
        setComment("");
        setName("");
        setEmail("");
      } else {
        alert("Xabar yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      alert("Xatolik: " + error.message);
    }
  };

  return (
    <Fragment>
      <div className="container-fluid my-5">
        <div className="streamit-reviews">
          <div className="review_form pt-5">
            <div className="comment-respond">
              <div onClick={back} className="iq-button my-5">
                <Button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="btn text-uppercase position-relative"
                  value="Submit"
                >
                  <span className="button-text">Ortga Qaytish</span>{" "}
                  <i className="fa-solid fa-play"></i>
                </Button>
              </div>
              <h3 className="fw-500 my-2">
                Ushbu darslik haqida fikringizni qoldiring!
              </h3>
              <p className="comment-notes">
                <span>
                  Sizning elektron pochta manzilingiz chop etilmaydi.{" "}
                </span>
                <span>
                  Majburiy maydonlar belgilangan
                  <span className="required"> * </span>
                </span>
              </p>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="12">
                    <Form.Group className="form-group">
                      <Form.Label>
                        Fikr bidirish uchun maydon
                        <span className="required"> *</span>
                      </Form.Label>
                      <textarea
                        className="form-control"
                        name="comment"
                        cols="5"
                        rows="8"
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group className="form-group">
                      <Form.Label>
                        Ismingiz
                        <span className="required"> *</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="author"
                        size="30"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group className="form-group">
                      <Form.Label>
                        Gmail manzilingiz
                        <span className="required"> *</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        size="30"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <div className="mt-3 mt-3 d-flex gap-2 align-items-center">
                      <Form.Check.Input
                        className="mt-0"
                        type="checkbox"
                        id="check1"
                      />
                      <Form.Check.Label htmlFor="check1">
                        Keyingi safar sharhlashim uchun ismim, elektron pochta
                        manzilim va veb-saytimni ushbu brauzerda saqlang.
                      </Form.Check.Label>
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="form-submit mt-4">
                      <div className="iq-button">
                        <Button
                          name="submit"
                          type="submit"
                          id="submit"
                          className="btn text-uppercase position-relative"
                          value="Submit"
                        >
                          <span className="button-text">Jonatish</span>{" "}
                          <i className="fa-solid fa-play"></i>
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default ReviewComponent;
