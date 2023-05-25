import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import BootStrapNavbar from 'react-bootstrap/Navbar'
import { Link, Outlet } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <BootStrapNavbar bg='info' variant='dark' expand='lg'>
      <h1 style={{ position:'relative', fontSize: 30, fontWeight: 'bold', paddingLeft: 50}}>
        FlexZone
      </h1>
        <Container style={{paddingLeft:1200}}>
          <BootStrapNavbar.Collapse id='basic-navbar-nav'>
            <Nav variant='pills' className='me-auto' fill style={{ width: '100%' }}>
              <Nav.Link as={Link} to={'/'}>
                Exercises
              </Nav.Link>
              <Nav.Link as={Link} to='/workout-schedule'>
                Schedule
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