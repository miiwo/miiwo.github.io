import React from 'react'
import styles from './clock.module.css'

class Clock extends React.Component {
    constructor(props) {
		super(props);
		let date = new Date();
		this.state = {
	    	hours: this._pad(date.getHours().toString()),
	    	minutes: this._pad(date.getMinutes().toString())
		};
    }

    _setTime() {
		let date = new Date();
		this.setState({
	    	hours: this._pad(date.getHours().toString()),
	    	minutes: this._pad(date.getMinutes().toString())
		});
    }

    _pad(ds) {
		return ('0' + ds).slice(-2);
    }

    render() {
		return (
	    	<div className={styles.center}><time className={styles.clock}>{this.state.hours}:{this.state.minutes}</time></div>
		)
    }

    componentDidMount() {
		this.timerID = setInterval( () => this._setTime(), 1000);
    }

    componentWillUnmount() {
		clearInterval(this.timerID);
    }
}

export default Clock
