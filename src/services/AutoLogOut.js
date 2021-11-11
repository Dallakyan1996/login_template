import React, { Component } from 'react'
import IdleTimer from 'react-idle-timer'

export default class YourApp extends Component {
  constructor(props) {
    super(props)
    this.idleTimer = null
    this.handleOnAction = this.handleOnAction.bind(this)
    this.handleOnActive = this.handleOnActive.bind(this)
    this.handleOnIdle = this.handleOnIdle.bind(this)
  }

  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          timeout={3600 * 1000}
          onActive={this.handleOnActive}
          onIdle={this.handleOnIdle}
          onAction={this.handleOnAction}
          debounce={250}
        />
      </div>
    )
  }

  handleOnAction(event) {
  }

  handleOnActive(event) {
  }

  handleOnIdle(event) {
    // localStorage.removeItem("cfuCurrentUser")
    // window.location.reload(true);

  }
}