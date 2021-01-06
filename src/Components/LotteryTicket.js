import React, { Component } 		from 'react';
import { Button, Card, Typography }	from 'antd';

const { Title }	= Typography;

class LotteryTicket extends Component {
	render() {
		const { actions, index, color, number }	= this.props;

		return(
			<Card
				style	={{ backgroundColor : color, marginBottom : 25	}}
				size	= 'small'
				title	= 'БИЛЕТЧЕ'
			>
				<b><Title level={ 3 } >{ number }</Title></b>
				<Button
					block
					onClick	= { () => { actions.removeTicket( index ) } }
				>
				X
				</Button>
			</Card>
		);
	}
}

export default LotteryTicket;