import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const comment = event.target.comment.value

    alert('Message sent, we will get back to you shortly 💪')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='Name'>
        <Form.Control required type='text' name='name' placeholder='Name' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='Email'>
        <Form.Control required type='email' name='email' placeholder='Email' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='Comment'>
        <Form.Control required as='textarea' rows={4} name='comment' placeholder='Comment' />
      </Form.Group>
      <Button type='submit' variant='dark'>
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm
