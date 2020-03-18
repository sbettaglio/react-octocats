import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { render } from 'react-dom'
import Octocat from './components/Octocat'
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <PageHeader />
        </header>
        <main>
          <Octocat />
        </main>
        <footer>
          <PageFooter />
        </footer>
      </>
    )
  }
}

export default App
