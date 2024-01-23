// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prev => ({count: prev.count + 10}))
    }
  }
  onApplyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prev => ({count: prev.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">Speed is {count}mph</h1>
        <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonContainer">
          <button onClick={this.onAccelerate} className="btn btn-primary">
            Accelerate
          </button>
          <button onClick={this.onApplyBrake} className="btn2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
