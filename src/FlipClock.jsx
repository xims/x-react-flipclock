import React, {Component} from 'react'

// 		--------------------------------		--------------------------------		---------
// 				---------
// 		------------	
// 				---------
// 		--------------------------------		--------------------------------		---------

import './FlipClock.scss';

import FlipUnit from 'FlipUnit'


export default class FlipClock extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	// 		--------------------------------		--------------------------------		---------

	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateTime(),
			1000
		);
	}

	// 		--------------------------------		--------------------------------		---------

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	// 		--------------------------------		--------------------------------		---------

	updateTime() {
		const { type, count_to } = this.props;

		let units = [];

		if (type=='countdown') {

			var date_to_arr = count_to.split(/[^0-9]/);
			const time_diff = (new Date (date_to_arr[0],date_to_arr[1]-1,date_to_arr[2],date_to_arr[3],date_to_arr[4])) - (new Date());

			// const time_diff =  Date.parseExact(count_to, "YYYY-MM-DD HH:mm:ss") - Date.parse(new Date());
			// const time_diff = Date.parse(count_to) - Date.parse(new Date());

			// console.log(count_to, Date.parse(count_to), time_diff);

			units.days = time_diff>0 ? Math.floor( time_diff/(1000*60*60*24) ) : 0;
			units.hours = time_diff>0 ? Math.floor( (time_diff/(1000*60*60)) % 24 ) : 0;
			units.minutes = time_diff>0 ? Math.floor( (time_diff/1000/60) % 60 ) : 0;
			units.seconds = time_diff>0 ? Math.floor( (time_diff/1000) % 60 ) : 0;
			
		} 
		else if (type=='clock') {

			const time_now = new Date;

			units.years = time_now.getYear()-100;
			units.months = time_now.getMonth()+1;
			units.days = time_now.getDate();
			units.hours = time_now.getHours();
			units.minutes = time_now.getMinutes();
			units.seconds = time_now.getSeconds();

		}

		['years', 'months', 'days', 'hours', 'minutes', 'seconds'] . 
			map( (u) => {
						// if( units[u] !== this.state[u]) {
							this.setState({
								[u] : units[u],
								[`${u}_pre`] : this.state[u] || 0,
								// [`${u}_shuf`] : !this.state[`${u}_shuf`],
							});
						// }
					}
				  )
	}

	// 		--------------------------------		--------------------------------		---------

	render() {

		const { type, count_to, units } = this.props;

		const show_units = units ? 
					units
						:
					type=='countdown' ?
							[
								{
									type: 'days',
									title: 'days',
								},
								{
									sep: ':',
									type: 'hours',
									title: 'hours',
								},
								{
									sep: ':',
									type: 'minutes',
									title: 'minutes',
								},
								{
									sep: ':',
									type: 'seconds',
									title: 'seconds',
								}
							]
						:
					type=='clock' ?
							[
								{
									type: 'days',
									title: 'day',
								},
								{
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
							]
						:
							null;


		return	<div className={'FlipClock'}>

				{
					show_units
						.map( (u, i) => [

										i>0 ? <div className='divider' key={'fcu-div-'+i}>{u.sep||'\u00A0'}</div> : null

										,

										<FlipUnit 

											title = {u.title}

											digit = {this.state[u.type]} 
											pre_digit = {this.state[`${u.type}_pre`]} 

											__shuffle = {this.state[`${u.type}_shuf`]} 


											key = {'fcu-'+i}

										  />
									]

							  )
				}

			</div>
	}

	// 		--------------------------------		--------------------------------		---------
}
