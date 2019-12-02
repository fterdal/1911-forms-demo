import React from "react"
import ReactDOM from "react-dom"
import Kittens from './components/Kittens'

const App = () => {
  return (
    <React.Fragment>
      <Kittens />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
