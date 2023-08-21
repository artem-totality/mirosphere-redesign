'use client';

import React from 'react';
import { Container } from '@/el/container';
import { Card } from '@/el/card';
// @ts-ignore
import Typed from 'typed.js';
import styles from './motto.module.scss';

export const Motto = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				'Присоединяйся, потому что только вместе можно добиться большего!',
				'Подключайся, потому что мы объединяем людей нацеленных на изменение мира!',
				'Присоединяйся, потому что мы уважаем каждого члена команды, как самих себя!',
			],
			typeSpeed: 90,
			backSpeed: 25,
			loop: true,
			startDelay: 1000,
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return (
		<section className={styles.motto}>
			<Container>
				<div className={styles.motto__inner}>
					<div className={styles.motto__title}>Партнерам:</div>
					<Card>
						<div className={styles['typing-area']}>
							<span ref={el} />
						</div>
					</Card>
				</div>
			</Container>
		</section>
	);
};
