import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ListGroup from 'react-bootstrap/ListGroup'
import React, { useState } from 'react'

function DayCard({ day, color, exercises, getWeekSchedule }) {
  const [isRest, setIsRest] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const exercise = event.target.exercise.value
    const setxReps = event.target.SetxReps.value
    const body = {
      day: day.toLowerCase(),
      exercises: exercise,
      setsreps: setxReps
    }
    const updateDay = await axios.post(`http://localhost:4000/api/schedule`, body)
    getWeekSchedule()
  }
  return (
    <Card bg={color.toLowerCase()} text={color.toLowerCase() === 'light' ? 'dark' : 'white'}>
      <Form onSubmit={handleSubmit}>
        <Card.Body>
          <Card.Title>{day}</Card.Title>
          {isRest ? (
            'Active Rest Day (go for a jog or bike ride)'
          ) : (
            <>
              <Form.Group className='mb-3' controlId='Exercise'>
                <Form.Control required type='text' name='exercise' placeholder='Exercise' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='SetxReps'>
                <Form.Control required type='text' name='SetxReps' placeholder='SetxReps' />
              </Form.Group>
            </>
          )}
        </Card.Body>
        {!isRest && (
          <ListGroup variant='flush'>
            {exercises.map((exercise) => (
              <ListGroup.Item key={exercise.day_id}>
                {exercise.exercises} {exercise.setsreps}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <Card.Footer>
          <ButtonToolbar style={{ gap: '1rem', textAlign: 'center', justifyContent: 'center' }}>
            <Button type='submit' variant={'dark'}>
              Add exercise
            </Button>
            <Button onClick={() => setIsRest(true)} type='button' variant={'dark'}>
              Mark Rest Day
            </Button>
          </ButtonToolbar>
        </Card.Footer>
      </Form>
    </Card>
  )
}

export default DayCard
