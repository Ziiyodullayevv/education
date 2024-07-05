import React, { Fragment, memo, useState } from "react";
import { message } from "antd";

//react bootstrap
import { Col, Container, Form, Row } from "react-bootstrap";

//react-router-dom

//components
import Logo from "../../components/logo";

// the hook
import { useTranslation } from "react-i18next";

import SettingOffCanvas from "../../components/setting/SettingOffCanvas";
import { useNavigate, useNavigation } from "react-router-dom";

const LoginPage = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";
  console.log(navigate.state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.emiratesacademy.uz/api/Auth/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        error();
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log("Response:", data);
      success();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { t } = useTranslation();

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Parol yoki gmail xato kiritilgan!",
    });
  };
  return (
    <Fragment>
      {contextHolder}
      <SettingOffCanvas />
      <main className="main-content">
        <div
          className="vh-100"
          style={{
            // backgroundImage: "url(assets/images/pages/01.webp)",
            backgroundImage:
              "url(https://kalix.club/uploads/posts/2022-12/1672269852_kalix-club-p-pattern-programmirovaniya-krasivo-5.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "500px",
          }}
        >
          <Container>
            <Row className="justify-content-center align-items-center height-self-center vh-100">
              <Col lg="5" md="12" className="align-self-center">
                <div className="user-login-card bg-body">
                  <div className="text-center">
                    <Logo />
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.username_or_email")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        required
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.password")}
                      </Form.Label>
                      <Form.Control
                        type="password"
                        autoComplete="current-password"
                        className="rounded-0"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    <div style={{ marginTop: "50px" }} className="full-button">
                      <div className="iq-button">
                        <button className="btn text-uppercase position-relative">
                          <span className="button-text">
                            {isLoading ? "Loading..." : "Login"}
                          </span>

                          <i className="fa-solid fa-play"></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
});

LoginPage.displayName = "LoginPage";
export default LoginPage;
