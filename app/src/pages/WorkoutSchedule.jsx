import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import DayCard from '../components/WorkoutSchedule/DayCard'
import axios from 'axios'
import { useEffect, useState } from 'react'

//TODO fix endpoint to fetch all days, post to include what day updating

function WorkoutSchedule() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const colors = ['Secondary', 'Light', 'Light', 'Light', 'Light', 'Light', 'Secondary']
  // ['Primary', 'Secondary', 'Success', 'Danger', 'Light', 'Info', 'Dark']
  // ['Light', 'Secondary', 'Light', 'Secondary', 'Light', 'Secondary', 'Light']
  const [isLoading, setIsLoading] = useState(false)
  const [week, setWeek] = useState([])
  const getWeekSchedule = async () => {
    setIsLoading(true)
    const { data } = await axios.get('http://localhost:4000/api/schedule/week')
    setWeek(data)
    setIsLoading(false)
  }
  useEffect(() => {
    getWeekSchedule()
  }, [])
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 style={{ textAlign: 'center' }}>Workout Schedule</h1>
        </Col>
      </Row>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner animation='border' variant='warning' />
        </div>
      ) : (
        <Row className='py-4 px-2'>
          {daysOfWeek.map((day, i) => (
            <Col key={day} className='p-1'>
              <DayCard
                getWeekSchedule={getWeekSchedule}
                exercises={week.filter((exercise) => exercise.day === day.toLowerCase())}
                day={day}
                color={colors[i]}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default WorkoutSchedule
