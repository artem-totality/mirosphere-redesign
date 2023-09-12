'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import { Card } from '@/el/card';
import styles from './products.module.scss';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export const Products = () => {
	return (
		<section className={styles.products}>
			<Container>
				<div className={styles.products__inner}>
					<SectionTitle>Наши проекты:</SectionTitle>
					<div className={styles.chess}>
						<div className={styles.chess__subtitle}>
							<Card>
								<a href="http://chess-you.org/" target="_blank">
									chess-you.org
								</a>
							</Card>
						</div>
						<picture className={styles.chess__img1}>
							<source media="(min-width: 601px)" srcSet="/chess/chess1.webp" />
							<img src="/chess/chess1-mob.webp" alt="Турнирная таблица" />
						</picture>
						<img
							src="/chess/chess4.webp"
							alt="Главный экран"
							className={styles.chess__img4}
						/>
						<div className={styles.chess__info1}>
							<Card>
								Полноценный доступ с мобильных устройств. Вы можете управлять
								своим аккаунтом исключительно с мобильного устройства
							</Card>
						</div>
						<div className={styles.chess__video}>
							<ReactPlayer
								url="/chess/chess.mp4"
								width={'100%'}
								height={'auto'}
								muted
								playing
								loop
							/>
						</div>
						<div className={styles.chess__info2}>
							<Card>
								Жеребьевка на большом экране понятна старикам и детям!
							</Card>
						</div>
						<picture className={styles.chess__img3}>
							<source media="(min-width: 601px)" srcSet="/chess/chess3.webp" />
							<img src="/chess/chess3-mob.webp" alt="Турнирная таблица" />
						</picture>
						<div className={styles.chess__info3}>
							<Card>
								Мы создали простой и продуманный сервис для проведения шахматных
								соревнований, где каждое действие похоже на игру. Вы с лёгкостью
								сможете управлять шахматным клубом, проводить турниры в пару
								кликов. Алгоритм автоматической жеребьевки, информационные
								экраны, управление присутствием, предварительная регистрация и
								другие инструменты, - всё это направленно на улучшение и
								упрощение жизни шахматного благородного сообщества!
							</Card>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
