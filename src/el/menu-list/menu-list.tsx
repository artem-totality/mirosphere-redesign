import React from 'react';
import { SmartLink } from '@/el/smart-link';

export const MenuList = () => {
	return (
		<>
			<SmartLink href="/">Главная</SmartLink>
			<SmartLink href="/partners">Партнерам</SmartLink>
			<SmartLink href="/clients">Клиентам</SmartLink>
			<SmartLink href="/rules">Устав</SmartLink>
			<SmartLink href="/contacts">Контакты</SmartLink>
			<SmartLink href="/404">404</SmartLink>
		</>
	);
};
