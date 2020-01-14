import React, {Component} from React;

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <h1>Ooops ... something went wrong</h1>
		}
	}
}