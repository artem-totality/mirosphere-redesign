'use client';

import React from 'react';
import { Container } from '@/el/container';
import { Card } from '@/el/card';
import styles from './command.module.scss';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.scss';

const statusFormatter = (currentItem: number, total: number) =>
	`0${currentItem} / 0${total}`;

export const Command = () => {
	return (
		<section className={styles.command}>
			<Container>
				<div className={styles.command__inner}>
					<div className={styles.command__title}>Команда Миросфера:</div>
					<div className={styles.command__slider}>
						<Carousel
							showIndicators={false}
							showThumbs={false}
							preventMovementUntilSwipeScrollTolerance={true}
							swipeScrollTolerance={25}
							statusFormatter={statusFormatter}
							infiniteLoop
						>
							<div className={styles.dev}>
								<Card>
									<div className={styles.dev__inner}>
										<div className={styles.dev__profile}>
											<img
												src="/command/prorab.webp"
												className={styles.dev__img}
												alt="Прораб"
											/>
											<div className={styles.dev__name}>
												Владимир Николаевич, Прораб
											</div>
										</div>
										<div className={styles.dev__info}>
											<div className={styles.dev__text}>
												— Владимир Николаевич, у тебя дома жена,
												сын&#8209;двоечник, за кооперативную квартиру не
												заплачено. А ты тут мозги пудришь. Плохо кончится,
												родной…
											</div>
											<a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BD-%D0%B4%D0%B7%D0%B0-%D0%B4%D0%B7%D0%B0!">
												©&nbsp;Кин-дза-дза
											</a>
										</div>
										<div className={styles.dev__controls}></div>
									</div>
								</Card>
							</div>
							<div className={styles.dev}>
								<Card>
									<div className={styles.dev__inner}>
										<div className={styles.dev__profile}>
											<img
												src="/command/gedevan.webp"
												className={styles.dev__img}
												alt="Студент"
											/>
											<div className={styles.dev__name}>
												Гедеван Александрович, Студент
											</div>
										</div>
										<div className={styles.dev__info}>
											<div className={styles.dev__text}>
												— Скрипач, вместо того, чтобы всё время думать, что ты
												первый грузинский космонавт, и что тебе Нобелевскую
												премию дадут, верни ложку, которую ты у нищих артистов
												украл.
												<br />— Небо… небо не видело такого позорного пацака как
												ты, Скрипач!.. Я очень глубоко скорблю…
											</div>
											<a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BD-%D0%B4%D0%B7%D0%B0-%D0%B4%D0%B7%D0%B0!">
												©&nbsp;Кин-дза-дза
											</a>
										</div>
										<div className={styles.dev__controls}></div>
									</div>
								</Card>
							</div>
							<div className={styles.dev}>
								<Card>
									<div className={styles.dev__inner}>
										<div className={styles.dev__profile}>
											<img
												src="/command/uef.webp"
												className={styles.dev__img}
												alt="Чатланин"
											/>
											<div className={styles.dev__name}>Уэф, Чатланин</div>
										</div>
										<div className={styles.dev__info}>
											<div className={styles.dev__text}>
												Посмотри на меня в <em>виза́тор</em>, родной. Какая точка
												отвечает? Зелёная. Теперь на него посмотри — тоже
												зелёная. И у тебя зелёная. А теперь на Уэфа посмотри,
												какая точка — оранжевая? Это потому, что он чатланин.
												Ну, понимаешь?
											</div>
											<a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BD-%D0%B4%D0%B7%D0%B0-%D0%B4%D0%B7%D0%B0!">
												©&nbsp;Кин-дза-дза
											</a>
										</div>
										<div className={styles.dev__controls}></div>
									</div>
								</Card>
							</div>
						</Carousel>
						<div className={styles['command__slider-control-divider']}></div>
					</div>
				</div>
			</Container>
		</section>
	);
};
