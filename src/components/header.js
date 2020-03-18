import React, { Component } from 'react'

export class header extends Component {
  render() {
    return (
      <>
        <img src="./images/GitHub-Mark-32px.png" alt="Github-logo" />
        <nav>
          <ul>
            <li class="octodex">
              <a href="https://octodex.github.com/">Octodex</a>
            </li>

            <li>
              <a href="https://octodex.github.com/">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
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

export default header
