# x-react-flipclock

Simple NPM package for React to display Flip Clock. 
Examples are at [https://xims.github.io/x-react-flipclock/]


## Installation

`npm install x-react-flipclock`


## Usage

Initiate:
```js

import FlipClock from 'x-react-flipclock'

```

There are 2 types of display - Clock and Countdown 

To use as a clock - 
```js

<FlipClock
	type="clock"
 />

```


To use as a clock - 
```js

<FlipClock
	type="clock"
 />

```


To use as a countdown - 
```js

<FlipClock 
	type = "countdown"
	count_to = "2019-01-01 00:00:00"
 />

```


### Options

Specify and configure units to display - 
```js

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

```


## Development

This package functionality is very basic and may be extended in the future.
Would be great to develop the package to adapt unit sizes to container area.
Also would be great to have styles options.


## Contributions

Contributions are welcome!


## Acknowledgement

Initial code based on https://codepen.io/Libor_G/pen/JyJzjb


## License

Copyright (c) 2018 Maxim Shklyar, kisla interactive

Licensed under the MIT License.