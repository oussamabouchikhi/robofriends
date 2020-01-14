import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
		// console.log('constructor'); to see ehat will run first
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({searchField: event.target.value})
		// console.log('onSearchChange');
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));

		
		// console.log('componentDidMount');
	}

	render(){
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		// console.log(filteredRobots);
		// console.log('render');
		//
		if (robots.length === 0) {
			return <h1>Loading...</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;