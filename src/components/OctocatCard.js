import React, { Component } from 'react'

export class OctocatCard extends Component {
  render() {
    return (
      <article>
        <section>
          <img src={this.props.imageUrl} alt="Terrocottocat" />
        </section>
        <summary>
          <p>{this.props.name}</p>
          <img class="logo" src={this.props.logo} alt="artist logo" />
        </summary>
      </article>
    )
  }
}

export default OctocatCard
