import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


class IndexPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			heroesLoaded: false,
			heroes: null
		};
	}



	fetchHeroes = () => {
		let thisComponent = this;

		fetch('/heroes.json')
			.then(res => res.json())
			.then(
				(result) => {
					thisComponent.setState({
						heroes: result,
						heroesLoaded: true
					});
				},
				(error) => {
					thisComponent.setState({
						heroesLoaded: false,
						error
					});
				}
			)
		console.log('did clicks')
	}

	heroesPending = () => (
		<button onClick={this.fetchHeroes}>Load Heroes</button>
	)

	heroesLoaded = () => (
		<ul>
			{this.state.heroes.map((item, key) => <li key={item.id}>{item.heroName}</li>)}
		</ul>
	)

	myHeroes() {
		if (this.state.heroesLoaded) {
			return this.heroesLoaded();
		} else {
			return this.heroesPending();
		}
	}

	render() {
		return (
			<Layout>
				<SEO title="Home" />
				<h1>Damage</h1>
				<h1>Tank</h1>
				<h1>Support</h1>
				{this.myHeroes()}
			</Layout>
		);
	}
}

export default IndexPage;