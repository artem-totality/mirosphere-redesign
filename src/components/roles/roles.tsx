import React from 'react';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import { Card } from '@/el/card';
import styles from './roles.module.scss';

export const Roles = () => {
	return (
		<section className={styles.roles}>
			<Container>
				<div className={styles.roles__inner}>
					<SectionTitle>Роли:</SectionTitle>
					<div className={styles.roles__content}>
						<div className={styles.roles__item}>
							<Card>
								<div className={styles.role}>
									<div className={styles.role__top}>
										<div className={styles.role__img}>
											<img src="/roles/cat1.jpg" alt="Друг" />
										</div>
										<div className={styles.role__title}>Друг</div>
									</div>
									<div className={styles.role__info}>
										Друг - полноправный участник сообщества. Человек, имеющий
										равное с другими право голоса в принятии важных для компании
										решений. Активный элемент системы, имеющий безусловную
										значимость для &quot;Миросферы&quot;.
									</div>
								</div>
							</Card>
						</div>
						{/* <div className={styles.roles__item}>
							<Card>
								<div className={styles.role}>
									<div className={styles.role__top}>
										<div className={styles.role__img}>
											<img src="/roles/cat3.jpg" alt="Щелкунчик" />
										</div>
										<div className={styles.role__title}>Щелкунчик</div>
									</div>
									<div className={styles.role__info}>
										Деревянная механическая кукла-карикатура, давно уже ставшая
										символом Нового года и Рождества. Щелкунчик выглядит очень
										необычно: большая голова по сравнению с тонкими ножками;
										плащ на нем узкий и смешной, будто деревянный, а на голове
										одета шапочка рудокопа.
									</div>
								</div>
							</Card>
						</div>
						<div className={styles.roles__item}>
							<Card>
								<div className={styles.role}>
									<div className={styles.role__top}>
										<div className={styles.role__img}>
											<img src="/roles/cat6.jpg" alt="Дюймовочка" />
										</div>
										<div className={styles.role__title}>Дюймовочка</div>
									</div>
									<div className={styles.role__info}>
										Крохотная девочка, героиня одноимённой сказки датского
										поэта, путешественника и сказочника Х. К. Андерсена.
									</div>
								</div>
							</Card>
						</div>
						<div className={styles.roles__item}>
							<Card>
								<div className={styles.role}>
									<div className={styles.role__top}>
										<div className={styles.role__img}>
											<img src="/roles/cat7.jpg" alt="Чебурашка" />
										</div>
										<div className={styles.role__title}>Чебурашка</div>
									</div>
									<div className={styles.role__info}>
										Вымышленный зверёк с огромными ушами, большими глазами и
										коричневой шерстью, ходящий на задних лапах.
									</div>
								</div>
							</Card>
						</div> */}
					</div>
				</div>
			</Container>
		</section>
	);
};
