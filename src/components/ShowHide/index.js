import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {fistName: true, lastName: true}

  OnshowHideFirstName = () => {
    const {fistName} = this.state
    this.setState(prevState => ({fistName: !prevState.fistName}))
  }

  OnshowHideLastName = () => {
    const {lastName} = this.state
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  getFirstName = () => {
    const {fistName} = this.state
    return fistName ? '' : 'show'
  }

  getLastName = () => {
    const {lastName} = this.state
    return lastName ? '' : 'show'
  }

  render() {
    const {fistName, lastName} = this.state
    const classNameF = this.getFirstName()
    const nameShowF = `showName ${classNameF}`
    const classNameL = this.getLastName()
    const nameShowL = `showName ${classNameL}`
    return (
      <div className="container">
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

            <p className={nameShowF}>Joe</p>
          </div>
          <div className="button">
            <button
              className="show-lastName"
              onClick={this.OnshowHideLastName}
              type="button"
            >
              Show/Hide LastName
            </button>

            <p className={nameShowL}>Jonas</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
