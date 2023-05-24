import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressTable from '../components/Progress/ProgressTable'

function Progress() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ textAlign: 'center' }}>Progress</h1>
        </Col>
      </Row>
      <Row className='py-4 px-2'>
        <ProgressTable />
      </Row>
    </Container>
  )
}

export default Progress
