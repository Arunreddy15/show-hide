import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {fistName: true, lastName: true}

  OnshowHideFirstName = () => {
    this.setState(prevState => ({fistName: !prevState.fistName}))
  }

  OnshowHideLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {fistName, lastName} = this.state

    return (
      <div className="container">
        <div className="body-container">
          <h1 className="top-heading">Show/Hide</h1>
          <div className="segments-container">
            <div className="button">
              <button
                className="show-firstName"
                onClick={this.OnshowHideFirstName}
                type="button"
              >
                Show/Hide Firstname
              </button>

              {fistName ? <p>Joe</p> : null}
            </div>
            <div className="button">
              <button
                className="show-lastName"
                onClick={this.OnshowHideLastName}
                type="button"
              >
                Show/Hide LastName
              </button>

              {lastName ? <p>Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
