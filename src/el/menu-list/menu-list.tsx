import React from 'react';
import { SmartLink } from '@/el/smart-link';

export const MenuList = ({ closeMenu }: { closeMenu?: () => void }) => {
	return (
		<>
			<SmartLink href="/" closeMenu={closeMenu}>
				Главная
			</SmartLink>
			<SmartLink href="/partners" closeMenu={closeMenu}>
				Партнерам
			</SmartLink>
			<SmartLink href="/clients" closeMenu={closeMenu}>
				Клиентам
			</SmartLink>
			<SmartLink href="/rules" closeMenu={closeMenu}>
				Устав
			</SmartLink>
			<SmartLink href="/contacts" closeMenu={closeMenu}>
				Контакты
			</SmartLink>
			<SmartLink href="/404" closeMenu={closeMenu}>
				404
			</SmartLink>
		</>
	);
};
