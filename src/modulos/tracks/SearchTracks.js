import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'

class SearchTracks extends Component {
  state = {
    query: ''
  }

  setQuery = event => {
    this.setState({ query: event.target.value })
  }

  search = () => {
    this.props.history.push(
      `/tracks?term=${this.state.query.split(/ +/).join('+')}`
    )
  }

  render() {
    return (
      <InputGroup>
        <Input placeholder="Escribe un grupo, canción,..." onChange={this.setQuery} />
        <InputGroupAddon addonType="append">
          <Button color="secondary" onClick={this.search}>
            Buscar
          </Button>
        </InputGroupAddon>
      </InputGroup>
    )
  }
}

export default withRouter(SearchTracks)
