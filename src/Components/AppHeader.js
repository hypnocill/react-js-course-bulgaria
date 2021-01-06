import React, { Component }	from 'react';
import { Layout, Menu }		from 'antd';
import { Link }				from 'react-router-dom';

const { Header } = Layout;


class AppHeader extends Component {
	render() {
		return (
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={[window.location.pathname]}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="/"><Link to='/'>Начало</Link></Menu.Item>
					<Menu.Item key="/about"><Link to='/about'>За нас</Link></Menu.Item>
				</Menu>
			</Header>
		);
	}
}

export default AppHeader;