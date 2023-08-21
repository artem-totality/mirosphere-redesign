import React from 'react';
import { Container } from '@/el/container';
import styles from './header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.header__inner}>
					<a href="/" className={styles.logo}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 48 48"
							className="jss13"
						>
							<defs>
								<linearGradient
									id="48x48_svg__b"
									x1="40.29"
									y1="-1249.87"
									x2="27.86"
									y2="-1262.3"
									gradientTransform="matrix(1 0 0 -1 0 -1227.23)"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0.63" stopColor="#f1dd97"></stop>
									<stop offset="1" stopColor="#cbad59"></stop>
								</linearGradient>
								<linearGradient
									id="48x48_svg__a"
									x1="15.38"
									y1="-1263.02"
									x2="40.02"
									y2="-1220.34"
									gradientTransform="matrix(1 0 0 -1 0 -1227.23)"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0" stopColor="#f1dd97"></stop>
									<stop offset="1" stopColor="#cbad59"></stop>
								</linearGradient>
								<linearGradient
									id="48x48_svg__c"
									x1="41.67"
									y1="17.85"
									x2="32.42"
									y2="17.85"
									xlinkHref="#48x48_svg__a"
								></linearGradient>
								<linearGradient
									id="48x48_svg__d"
									x1="41.24"
									y1="28.58"
									x2="3.55"
									y2="28.58"
									xlinkHref="#48x48_svg__a"
								></linearGradient>
							</defs>
							<path
								d="M43.62 32.86c.88-2.22 1.82-7.15-1-7.15H29.35c-1.41 0-4.26.16-3.75-1.94-.75 2.07-2.82 6-1 8 1.17 1.31 3.27 1.07 4.85 1.07Z"
								style={{ fill: 'url(#48x48_svg__b)' }}
							></path>
							<path
								d="M27.44 32.85h-5.91c-3.41 0-4.56-3.47-3.92-6.38 1-4.52 6.69-14.58 8.71-19a13.58 13.58 0 0 0-4.84-.16c6.31-3 9.07-4.38 15.08-7.28-3.79 8.45-6.5 13.58-10.28 22-.3.65-2.38 6.18-2.3 8.08s1.54 2.49 3.46 2.74Z"
								style={{ fill: 'url(#48x48_svg__a)' }}
							></path>
							<path
								d="M39.54 23.55h2.13a19.44 19.44 0 0 0-8.39-11.4L32.4 14a17.2 17.2 0 0 1 7.14 9.55Z"
								style={{ fill: 'url(#48x48_svg__c)' }}
							></path>
							<path
								d="M39 35a17.36 17.36 0 1 1-17-23.82l1-2h-.17A19.42 19.42 0 1 0 41.24 35Z"
								style={{ fill: 'url(#48x48_svg__d)' }}
							></path>
						</svg>
						<span className={styles.logo__title}>Миросфера</span>
					</a>
					<nav className={styles.menu}>
						<div className={styles.menu__list}>
							<a href="/" className={styles.menu__item}>
								Главная страница
							</a>
							<a
								href="https://mirosphere.ru/docs/order"
								className={styles.menu__item}
							>
								Регламент
							</a>
							<a
								href="https://mirosphere.ru/docs/rules"
								className={styles.menu__item}
							>
								Устав
							</a>
							<a href="/partners" className={styles.menu__item}>
								Партнерам
							</a>
						</div>
					</nav>
				</div>
			</Container>
		</header>
	);
};
