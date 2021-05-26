import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../../Components/Hero/Hero";
import "./user.css";

export default function User() {
  return (
    <Container>
      <Hero
        title="welcome lorenzo"
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
            lorvannu
            <a href="#">
              <i class="fas fa-pencil-alt"> </i>{" "}
            </a>
          </p>
        </Col>
        <Col>
          <h5>Email:</h5>
          <p>
            lorvannu@gmail.com
            <a href="#">
              <i class="fas fa-pencil-alt"> </i>{" "}
            </a>
          </p>
        </Col>
        <Col>
          <h5>Password:</h5>
          <p>
            ******
            <a href="#">
              <i class="fas fa-pencil-alt"> </i>{" "}
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
