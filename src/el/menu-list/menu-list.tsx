import React from 'react';
import './menu-list.scss';

export const MenuList = () => {
	return (
		<>
			<a href="/" className="menu-item">
				Главная
			</a>
			<a href="/partners" className="menu-item">
				Партнерам
			</a>
			{/* <a href="/clients" className="menu-item">
				Клиентам
			</a> */}
			<a href="/contacts" className="menu-item">
				Контакты
			</a>
		</>
	);
};
