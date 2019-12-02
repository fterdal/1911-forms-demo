import React from "react"
import ReactDOM from "react-dom"

const waitFor = async () => {
  await Promise.resolve()
  return 'hello world'
}

const App = () => {
  waitFor()
  return <h1>🤩 React</h1>
}

ReactDOM.render(<App />, document.getElementById("app"))
