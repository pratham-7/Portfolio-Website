import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import Typewriter from "typewriter-effect";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Prathmesh Bansal! `}
                    <p></p>
                    <div className="txt-rotate">
                      <Typewriter
                        options={{
                          loop: true,
                        }}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString("Tech Enthusiast")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Web Developer")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Coder")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Gamer")

                            .pauseFor(1000)
                            .start();

                        }}
                      />
                    </div>
                  </h1>
                  <p>
                  <ul>
                    <li>I'm third year undergraduate student at SGSITS Indore from the department of Information Technology.</li>
                    <p></p>
                    <li>I'm currently learning React and exploring Web Development Projects.</li>
                    <p></p>
                    <li>I'm a passionate person willing to learn continuously.</li>
                    <p></p>
                    <li>I enjoy playing badminton and games in my spare time.</li>
                  </ul> </p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
