import React from "react"

class Kittens extends React.Component {
  constructor() {
    super()
    this.state = {
      highestId: 2,
      kittens: [
        { id: 1, name: "Priti" },
        { id: 2, name: "Travis" }
      ],
      newKittenName: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const newKitten = {
      id: this.state.highestId + 1,
      name: this.state.newKittenName
    }
    this.setState(prevState => ({
      kittens: [...prevState.kittens, newKitten],
      highestId: prevState.highestId + 1,
      newKittenName: ""
    }))
  }
  handleChange(evt) {
    const { value } = evt.target
    console.log(value)
    if (value.toLowerCase() !== "gurturde") {
      this.setState({
        newKittenName: value
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>Add a kitten</div>
        {/* Form goes here */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="kittenName"
            onChange={this.handleChange}
            value={this.state.newKittenName}
            // value="Fullstack Branded Kitten"
          />
          <button disabled={this.state.newKittenName.length < 1} type="submit">
            Create Kitten
          </button>
        </form>

        <div>KittenList:</div>
        <div className="kittens-container">
          {this.state.kittens.map(kitten => (
            <div className="kitten" key={kitten.id}>
              <div>{kitten.name}</div>
              <img
                className="kitten-img"
                src={`https://robohash.org/${kitten.name}?set=set4`}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Kittens
