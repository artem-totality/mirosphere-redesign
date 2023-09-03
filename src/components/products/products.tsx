import React from 'react';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import { Card } from '@/el/card';
import styles from './products.module.scss';

export const Products = () => {
	return (
		<section className={styles.products}>
			<Container>
				<div className={styles.products__inner}>
					<SectionTitle>Наши проекты</SectionTitle>
					<div className={styles.chess}>
						<div className={styles.chess__subtitle}>
							<Card>
								<a href="http://chess-you.org/" target="_blank">
									chess-you.org
								</a>
							</Card>
						</div>
						<img
							src="/chess/chess1.jpg"
							alt="Турнирная таблица"
							className={styles.chess__img1}
						/>
						<img
							src="/chess/chess4.jpg"
							alt="Главный экран"
							className={styles.chess__img4}
						/>
						<div className={styles.chess__info1}>
							<Card>
								И если он меня прикончит матом, то я его через бедро с захватом
								или ход конём по голове!
								<span>В.В. Высоцкий</span>
							</Card>
						</div>
						<img
							src="/chess/chess5.jpg"
							alt="Видео"
							className={styles.chess__img5}
						/>
						<div className={styles.chess__info2}>
							<Card>Спасение утопающих дело рук самих утопающих!</Card>
						</div>
						<img
							src="/chess/chess3.jpg"
							alt="Жеребъёвка"
							className={styles.chess__img3}
						/>
						<div className={styles.chess__info3}>
							<Card>
								— Шахматы! — говорил Остап. — Знаете ли вы, что такое шахматы?
								Они двигают вперед не только культуру, но и экономику! Знаете ли
								вы, что шахматный клуб четырех коней при правильной постановке
								дела сможет совершенно преобразить город Васюки?
								<br />
								Остап со вчерашнего дня еще ничего не ел. Поэтому красноречие
								его было необыкновенно.
							</Card>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
