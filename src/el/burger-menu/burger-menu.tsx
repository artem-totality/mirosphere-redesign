'use client';

import React, { useState } from 'react';
import { slide as SideBar, Props } from 'react-burger-menu';
import { MenuList } from '@/el/menu-list';

export const BurgerMenu = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<SideBar
			{...props}
			isOpen={isOpen}
			onOpen={handleIsOpen}
			onClose={handleIsOpen}
		>
			<MenuList closeMenu={closeMenu} />
		</SideBar>
	);
};
