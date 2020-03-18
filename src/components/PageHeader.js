import React, { Component } from 'react'
import HeaderList from './HeaderList'
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
        <a class="twitter" href="https://twitter.com/githubdesign">
          Follow us on Twitter
        </a>
        <a class="git-back" href="https://www.github.com">
          Back to GitHub.Com
        </a>
      </>
    )
  }
}

export default PageHeader
