import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../../Components/Hero/Hero";
import "./user.css";
import { Redirect } from "react-router";
import { getOrder } from "../../utilities/axios";
import { useEffect } from "react";

export default function User({ user, authenticated, handleOrder, order }) {
  useEffect(() => {
    const getNewOrders = async (id) => {
      const response = await getOrder(id);
      handleOrder(response);
    };
    getNewOrders(user.userID);
    return () => {
      handleOrder([]);
    };
  }, []);

  return (
    <div>
      {authenticated ? (
        <Container>
          <Hero
            title={`Welcome ${user.name}!`}
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="username-hero-img"
          />
          <Row>
            <Col style={{ marginBottom: "2rem" }}>
              <h4>User Dashboard</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Username:</h5>
              <p>
                {user.username}
                <a className="userTage" href="#">
                  <i class="fas fa-pencil-alt"> </i>{" "}
                </a>
              </p>
            </Col>
            <Col>
              <h5>Email:</h5>
              <p>
                {user.email}
                <a className="userTage" href="#">
                  <i class="fas fa-pencil-alt"> </i>{" "}
                </a>
              </p>
            </Col>
            <Col>
              <h5>Password:</h5>
              <p>
                ******
                <a className="userTage" href="#">
                  <i class="fas fa-pencil-alt"> </i>{" "}
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ marginBottom: "2rem", marginTop: "1.5rem" }}>
                Your orders:
              </h4>
            </Col>
          </Row>
          {order.map((orderItem) => {
            return (
              <Row>
                <Col>
                  <h5>Date:</h5>
                  <p>
                    {orderItem.modified.slice(8, 10) +
                      "/" +
                      orderItem.modified.slice(5, 7) +
                      "/" +
                      orderItem.modified.slice(0, 4)}
                  </p>
                </Col>
                <Col>
                  <h5>Total:</h5>
                  <p>£{orderItem.total}</p>
                </Col>
                <Col>
                  <h5>Status:</h5>
                  <p>
                    <em>Payment received - {orderItem.status}</em>
                  </p>
                </Col>
              </Row>
            );
          })}
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
