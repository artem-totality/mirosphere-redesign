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
							©&nbsp;2023&nbsp;ООО&nbsp;"Миросфера"
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
					</defs>
				</svg>
			</div>
		</>
	);
};
