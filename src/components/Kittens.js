import React from "react"

class Kittens extends React.Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      kittens: [
        { id: 1, name: "Priti" },
        { id: 2, name: "Collin" },
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>Add a kitten</div>

        <div>KittenList:</div>
        <div className="kittens-container">
          {this.state.kittens.map(kitten => (
            <div className="kitten" key={kitten.id}>
              <div>{kitten.name}</div>
              <img className="kitten-img" src={`https://robohash.org/${kitten.name}?set=set4`} />
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Kittens
