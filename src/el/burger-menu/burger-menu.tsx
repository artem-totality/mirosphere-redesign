'use client';

import React from 'react';
import { slide as SideBar, Props } from 'react-burger-menu';
import { MenuList } from '@/el/menu-list';

export const BurgerMenu = (props: Props) => {
	return (
		<SideBar {...props}>
			<MenuList />
		</SideBar>
	);
};
