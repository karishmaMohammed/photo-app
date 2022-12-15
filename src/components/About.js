import { Container, Row, Col } from 'react-bootstrap'
import brandLogo from '../assets/brand-logo.png'

const About = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <h1 className="display-3 mt-2 mb-4">About Us</h1>
      <Col>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio
        magnam pariatur ducimus, reiciendis id, unde repellendus ea debitis,
        minus sed. Autem, repudiandae. Aliquam aperiam ipsum cumque iste.
        Consequuntur architecto enim accusantium, quae sed et tempora earum
        sapiente necessitatibus nulla atque consequatur ratione itaque
        voluptatibus sequi nostrum accusamus minus quia dolorem rem recusandae
        ducimus est. Expedita repellendus illo ut quaerat culpa eveniet
        repudiandae, atque recusandae maxime magni sit rerum velit ad! Quisquam
        odio inventore minima ullam, expedita ea sunt ratione molestiae ex
        magnam at magni, blanditiis, accusamus harum vitae debitis quaerat nemo!
        Libero explicabo minus praesentium aliquid illum voluptas nesciunt,
        commodi qui molestiae ipsa. 
        
      </Col>
      
      <hr />
      <Row>
        <Col md={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          hic laboriosam suscipit labore in expedita alias. Distinctio quam fuga
          perferendis recusandae natus amet provident incidunt fugit soluta
          facere eos quis praesentium, illo officiis facilis sed dolorem,
          impedit porro nisi eveniet? Illo qui iste quisquam nisi magni
          molestiae. Dolor impedit obcaecati, amet voluptates quidem cupiditate
          voluptatem aperiam ipsa deserunt? Ipsum reiciendis tempora,
          reprehenderit ducimus rem temporibus a repudiandae. Ratione vero fugit
          officia magni repellendus quis, fugiat vel ipsum pariatur, omnis
          quidem.
        </Col>
        <Col md={2}>
          <img src={brandLogo} alt="brand" style={{ height: "200px" }} />
        </Col>
				<Col md={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          hic laboriosam suscipit labore in expedita alias. Distinctio quam fuga
          perferendis recusandae natus amet provident incidunt fugit soluta
          facere eos quis praesentium, illo officiis facilis sed dolorem,
          impedit porro nisi eveniet? Illo qui iste quisquam nisi magni
          molestiae. Dolor impedit obcaecati, amet voluptates quidem cupiditate
          voluptatem aperiam ipsa deserunt? Ipsum reiciendis tempora,
          reprehenderit ducimus rem temporibus a repudiandae. Ratione vero fugit
          officia magni repellendus quis, fugiat vel ipsum pariatur, omnis
          quidem.
        </Col>
      </Row>
			
    </Container>
  );
}

export default About;
