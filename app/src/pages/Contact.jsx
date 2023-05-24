import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactForm from '../components/Contact/ContactForm'

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ textAlign: 'center' }}>Contact</h1>
        </Col>
      </Row>
      <Row className='py-4 px-2'>
        <Col></Col>
        <Col xs={'4'}>
          <ContactForm />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Contact
