import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MuscleGroupSelector from '../components/Home/MuscleGroupSelector'
import SubMuscleExerciseCards from '../components/Home/SubMuscleExerciseCards'

function Home() {
  const [selectedSubMuscleExercises, setSelectedSubMuscleExercises] = useState([])
  return (
    <Container fluid>
      <Row>
        <Col>  
          <h1 style={{ textAlign: 'center' }}>Muscle Groups Exercises</h1>
        </Col>
      </Row>
      <Row className='py-4 px-2'>
        <Col>
          <MuscleGroupSelector setSelectedSubMuscleExercises={setSelectedSubMuscleExercises} />
        </Col>
        {/* <Col></Col> */}
        <Col>
          <SubMuscleExerciseCards  selectedSubMuscleExercises={selectedSubMuscleExercises} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
