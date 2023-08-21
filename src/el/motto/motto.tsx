import React from 'react';
import { Container } from '@/el/container';
import { Card } from '@/el/card';
import styles from './motto.module.scss';

export const Motto = () => {
	return (
		<section className={styles.motto}>
			<Container>
				<div className={styles.motto__inner}>
					<div className={styles.motto__title}>Партнерам:</div>
					<Card>
						<div className={styles['typing-area']}>
							<span id="typing-area"></span>
							<div className={styles['typed-text']} id="typed-text">
								<p>
									Присоединяйся, потому что только вместе можно добиться
									большего!
								</p>
								{/* <p>
									Подключайся, потому что мы объединяем людей нацеленных на
									изменение мира
								</p>
								<p>
									Присоединяйся, потому что мы уважаем каждого члена команды,
									как самих себя
								</p> */}
							</div>
						</div>
					</Card>
				</div>
			</Container>
		</section>
	);
};
