import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function SubMuscleExerciseCards({ selectedSubMuscleExercises }) {
  return (
    <>
      {selectedSubMuscleExercises.map((exercise) => (
        <Card style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{exercise.name}</Card.Title>
            <Card.Text>{exercise.setsReps}</Card.Text>
            <Button variant='dark'>
              <a target='_blank' rel='noopener noreferrer' href={exercise.videoLink}>
                Watch exercise
              </a>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default SubMuscleExerciseCards
