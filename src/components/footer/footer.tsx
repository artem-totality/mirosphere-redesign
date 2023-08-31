import React from 'react';
import { Container } from '@/el/container';
import styles from './footer.module.scss';

export const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<Container>
					<div className={styles.footer__inner}>
						<div className={styles.footer__copyrights}>
							©&nbsp;2023&nbsp;ООО&nbsp; &#34;Миросфера&#34;
						</div>
						<div className={styles.footer__text}>
							Создано при поддержке открытого сообщества разработчиков
							©&nbsp;Altiore
						</div>
						<div className={styles.footer__text}>От людей поколениям</div>
						<div className={styles.footer__link}>
							<a href="https://t.me/mirosphere_org" target="_blank">
								<svg>
									<use href="#telegramSvg" />
								</svg>
							</a>
						</div>
					</div>
				</Container>
			</footer>
			<div className="svg-sprite">
				<svg>
					<defs>
						<symbol id="telegramSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M6.81,13.39,9.3,19.61l3.24-3.23,5.55,4.41L22,3.21,2,11.54Zm9.48-5.14-6.13,5.59L9.4,16.71,8,13.19Z"
							/>
						</symbol>
						<symbol id="phoneSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
							/>
						</symbol>
						<symbol id="mailSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
							/>
						</symbol>
					</defs>
				</svg>
			</div>
		</>
	);
};
