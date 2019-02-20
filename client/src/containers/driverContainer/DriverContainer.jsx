import React, { Component } from 'react'

class DriverContainer extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <section style={section}>
        <div style={style}>
          <input type="text" name="driverId"/>
          <button className="btn btn-lg btn-primary">SHOP NOW</button>
        </div>
      </section>
    )
  }
}

const section = {
  display: 'flex',
  height: 100
}

const style = {
}

export default DriverContainer