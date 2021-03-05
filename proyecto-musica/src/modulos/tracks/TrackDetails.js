import React, { Component, Fragment } from 'react'
import { Button } from 'reactstrap'

export default class extends Component {
  state = {
    track: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`https://itunes.apple.com/lookup?id=${id}`)
      .then(res => res.json())
      .then(json => this.setState({ track: json.results[0] }))
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const {
      trackName,
      artistName,
      previewUrl
    } = this.state.track

    return (
      <Fragment>
        <h2>{trackName}</h2>
        <hr />
        Artista: {artistName} <br/><br/>
        <audio controls>
          <source src={previewUrl} type="audio/x-m4a" />
        </audio><br/><br/>
        <Button onClick={this.goBack}>Volver</Button>
      </Fragment>
    )
  }
}
