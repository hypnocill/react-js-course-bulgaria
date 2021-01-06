import { getRandomNumber, getRandomColor }	from './utils';

export function registerTicket() {
	const newTicket	= {
		number	: getRandomNumber(),
		color	: getRandomColor()
	};

	this.setState( ( prevState ) => {
		prevState.tickets.push( newTicket );

		return {
			tickets				: prevState.tickets,
			remainingTickets	: -- prevState.remainingTickets
		}
	} );
}

export function removeTicket( index ) {
	this.setState( ( prevState ) => {
		prevState.tickets.splice( index, 1 );

		return {
			tickets			: prevState.tickets,
			remainingTickets: ++ prevState.remainingTickets
		}
	} );
}

export function finish() {
	this.setState( { finished: true } );
}

export function reset() {
	this.setState( {
		winningNumber		: getRandomNumber(),
		tickets				: [],
		remainingTickets	: 5,
		finished			: false
	} );
}