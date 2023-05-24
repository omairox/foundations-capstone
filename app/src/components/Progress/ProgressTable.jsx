import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'

import NewEntryForm from './NewEntryForm'

function ProgressTable() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState([])
  const [showNewEntryForm, setShowNewEntryForm] = useState(false)
  const getProgress = async () => {
    setIsLoading(true)
    const { data } = await axios.get('http://localhost:4000/api/progress')
    setProgress(data)
    setIsLoading(false)
  }
  useEffect(() => {
    getProgress()
  }, [])
  return (
    <Container fluid>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner animation='border' variant='warning' />
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight</th>
              <th>Progress with Weekly Goal</th>
            </tr>
          </thead>
          <tbody>
            {progress.map((entry) => (
              <tr key={entry.progress_id}>
                <td>{entry.date}</td>
                <td>{entry.weight}</td>
                <td>{entry.progressnote}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {showNewEntryForm && (
        <Card bg='warning'>
          <NewEntryForm setShowNewEntryForm={setShowNewEntryForm} getProgress={getProgress} />
        </Card>
      )}
      <Row className='pt-4'>
        <Col></Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant='dark' onClick={() => setShowNewEntryForm(true)}>
            Add Entry
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default ProgressTable
