import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function NewEntryForm({ setShowNewEntryForm, getProgress }) {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const date = event.target.date.value
    const weight = event.target.weight.value
    const progress = event.target.progress.value
    const body = {
      date,
      weight: parseInt(weight),
      progress
    }
    setShowNewEntryForm(false)
    const newEntry = await axios.post('http://localhost:4000/api/progress', body)
    getProgress()
  }
  return (
    <Form
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '1rem'}}
      onSubmit={handleSubmit}>
      <Form.Group style={{ flexGrow: 1 }} controlId='Date'>
        <Form.Control required type='date' name='date' placeholder='Date' />
      </Form.Group>
      <Form.Group style={{ flexGrow: 1 }} controlId='Weight'>
        <Form.Control required type='number' name='weight' placeholder='Weight' />
      </Form.Group>
      <Form.Group style={{ flexGrow: 1 }} controlId='Progress'>
        <Form.Control required type='text' name='progress' placeholder='Progress notes' />
      </Form.Group>
      <Button type='submit' variant='dark'>
        Submit
      </Button>
    </Form>
  )
}

export default NewEntryForm
