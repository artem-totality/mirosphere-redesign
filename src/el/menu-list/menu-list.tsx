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
			<a href="/clients" className="menu-item">
				Клиентам
			</a>
			<a href="/rules" className="menu-item">
				Устав
			</a>
			<a href="/contacts" className="menu-item">
				Контакты
			</a>
			<a href="/404" className="menu-item menu-item--404">
				404
			</a>
		</>
	);
};
