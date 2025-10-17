import { Navbar, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSongsByQuery } from "../redux/actions";
import logo from "../assets/logo/logo.png";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    dispatch(getSongsByQuery(query));
    setQuery("");
  };

  return (
    <aside className="col col-2">
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Navbar.Brand href="#" className="navbar-brand">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />

          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav flex-column">
              <ul>
                <li>
                  <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <Form onSubmit={handleSearch}>
                    <InputGroup className="mt-3">
                      <Form.Control type="text" placeholder="Search" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                      <Button variant="outline-secondary" size="sm" type="submit">
                        GO
                      </Button>
                    </InputGroup>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className="nav-btn">
          <Button className="signup-btn mb-2" type="button">
            Sign Up
          </Button>
          <Button className="login-btn mb-2" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
