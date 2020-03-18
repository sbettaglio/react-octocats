import React, { Component } from 'react'
import HeaderList from './HeaderList'
import HeaderLinks from './HeaderLinks'
import githublogo from '../images/GitHub-Mark-32px.png'

export class PageHeader extends Component {
  render() {
    return (
      <>
        <img src={githublogo} alt="Github-logo" />
        <nav>
          <ul>
            <HeaderList />
          </ul>
        </nav>
        <HeaderLinks />
      </>
    )
  }
}

export default PageHeader
