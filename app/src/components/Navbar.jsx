import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import BootStrapNavbar from 'react-bootstrap/Navbar'
import { Link, Outlet } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <BootStrapNavbar bg='info' variant='dark' expand='lg'>
        <Container>
          <BootStrapNavbar.Collapse id='basic-navbar-nav'>
            <Nav variant='pills' className='me-auto' fill style={{ width: '50%' }}>
              <h1 style={{ position:'relative', fontSize: 30, fontWeight: 'bold'}}>
                FlexZone
              </h1>
              <Nav.Link as={Link} to={'/'}>
                Exercises
              </Nav.Link>
              <Nav.Link as={Link} to='/workout-schedule'>
                Workout Schedule
              </Nav.Link>
              <Nav.Link as={Link} to='/progress' color='info'>
                Progress
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                Contact
              </Nav.Link>
            </Nav>
          </BootStrapNavbar.Collapse>
        </Container>
      </BootStrapNavbar>
      <Outlet />
    </>
  )
}

export default Navbar
