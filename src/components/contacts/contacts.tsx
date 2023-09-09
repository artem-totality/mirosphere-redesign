import React from 'react';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import { Card } from '@/el/card';
import styles from './contacts.module.scss';

export const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<Container>
				<div className={styles.contacts__inner}>
					<SectionTitle>Контакты:</SectionTitle>
					<div className={styles.contacts__info}>
						Разработка web&#8209;приложений любой сложности под ключ
					</div>
					<div className={styles.contacts__main}>
						<div className={styles.contacts__links}>
							<Card>
								<div className={styles['contacts__links-inner']}>
									<a href="tel:+79604777288" className={styles.link}>
										<svg>
											<use href="#phoneSvg" />
										</svg>
										<span className={styles.link__title}>
											+7(960)-4-777-2-88
										</span>
									</a>
									<a
										href="https://t.me/pavel_i_tel"
										className={styles.link}
										target="_blank"
									>
										<svg>
											<use href="#telegramSvg" />
										</svg>
										<span className={styles.link__title}>Telegram</span>
									</a>
									<a href="mailto:admin@mirosphere.org" className={styles.link}>
										<svg>
											<use href="#mailSvg" />
										</svg>
										<span className={styles.link__title}>
											admin@mirosphere.org
										</span>
									</a>
								</div>
							</Card>
						</div>
						<form className={styles.contacts__form}>
							<Card>
								<div className={styles['contacts__form-inner']}>
									<div className={styles['contacts__form-text']}>
										Хочу получать обновления о проекте
									</div>
									<input
										type="text"
										placeholder="ваша электронная почта"
										required
									/>
									<button type="submit">Подписаться</button>
								</div>
							</Card>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
};
