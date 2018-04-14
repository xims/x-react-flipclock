import React, { Component } from "react";

import FlipClock from '../src/FlipClock';

import "./app.scss";


export default class FlipClockExamples extends React.Component {

//	------------------------	------------------------	------------------------

	render() {

		return <div id="root">
					
				Hello, World 

				<hr />

				clock;	270 x 
				<div className="demobox" style={{width:270}} >
					<FlipClock 
						type = "clock"
					 />
				</div>

				<hr />

				clock;	420 x 
				<div className="demobox" style={{width:420}} >
					<FlipClock 
						type = "clock"
						units = {[
									{
										sep: '',
										type: 'days',
										title: 'day',
									},
									{
										sep: '/',
										type: 'months',
										title: 'month',
									},
									{
										sep: '/',
										type: 'years',
										title: 'year',
									},
									{
										sep: ' ',
										type: 'hours',
										title: 'hour',
									},
									{
										sep: ':',
										type: 'minutes',
										title: 'minute',
									},
									{
										sep: ':',
										type: 'seconds',
										title: 'second',
									}
								]}
					 />
				</div>

				<hr />

				countdown to 2019-01-01 00:00:00;	400 x 100
				<div className="demobox" style={{width:400, height:100}} >
					<FlipClock 
						type = "countdown"
						count_to = "2019-01-01 00:00:00"
					 />
				</div>

				<hr />

			</div>
	}
}
