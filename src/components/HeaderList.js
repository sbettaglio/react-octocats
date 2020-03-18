import React, { Component } from 'react'

export class HeaderList extends Component {
  render() {
    return (
      <>
        <li class="octodex">
          <a href="https://octodex.github.com/">Octodex</a>
        </li>

        <li>
          <a href="https://octodex.github.com/">Home</a>
        </li>
        <li>
          <a href="https://octodex.github.com/faq/">FAQ</a>
        </li>
      </>
    )
  }
}

export default HeaderList
