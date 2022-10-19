
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Navbar,Form,Button,Nav,NavDropdown } from "react-bootstrap";
import logo from "./image/arplan.png";

function App() {
  return (
    <div className="App">

<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'    '}
          GesCow  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Support</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="img" >
          <img src={logo} style={{width:"290px", marginRight:"auto",marginLeft:"auto"}}/>
        </div>
      <Form style={{width:"450px", marginTop:"20px",marginRight:"auto",marginLeft:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Email address</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    
    
    </div>
  );
}

export default App;
