'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

import styles from './smart-link.module.scss';

export const SmartLink = ({
	children,
	href,
	closeMenu,
}: {
	children: React.ReactNode;
	href: string;
	closeMenu?: () => void;
}) => {
	const router = useRouter();
	const pathname = usePathname();

	const actualClassName =
		pathname === href
			? `${styles['menu-item']} ${styles['menu-item--active']}`
			: styles['menu-item'];

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		router.push(href);
		closeMenu && closeMenu();
	};

	return (
		<Link href={href} onClick={handleClick} className={actualClassName}>
			<span>{children}</span>
		</Link>
	);
};
