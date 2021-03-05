import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route, NavLink } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand, NavItem, Container } from 'reactstrap'

import Tracks from '../tracks/Tracks'
import Login from '../vistas/login'

export default () => (
  <Router>
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        Inicio
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/tracks" className="nav-link">
            Canciones
          </NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/vistas" className="nav-link">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    <Container className="mt-3">
      <Switch>
        <Route path="/tracks" component={Tracks} />
      </Switch>
    </Container>
    <Container className="mt-4">
      <Switch>
        <Route path="/vistas" component={Login} />
      </Switch>
    </Container>
  </Router>
)
