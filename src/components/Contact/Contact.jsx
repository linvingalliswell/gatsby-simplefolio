import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn1, email1, btn2, email2 } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={email1 ? `mailto:${email1}` : 'https://github.com/cobidev/react-simplefolio'}
              >
                {btn1 || "Let's Talk"}
              </a>
            </div>
            <br />
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={email2 ? `${email2}` : 'https://github.com/cobidev/react-simplefolio'}
              >
                {btn2 || "Let's Talk"}
              </a>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
