import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from 'react-hot-loader';

import FlipClockExamples from "./FlipClockExamples.jsx";


const renderSite = () => {
	ReactDOM.render(
		<AppContainer>
			<FlipClockExamples />
		</AppContainer>,
		document.getElementById('app')
	);
}

renderSite()


// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept()
	// module.hot.accept('./Main', () => renderSite())
}