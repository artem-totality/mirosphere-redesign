import React from 'react';
import Link from 'next/link';
import { Container } from '@/el/container';
import ActiveClock from '@/el/active-clock';
import styles from './main.module.scss';

export const Main = () => {
	return (
		<main className={styles.main}>
			<Container>
				<div className={styles.main__inner}>
					<div className={styles.main__content}>
						<div className={styles.main__title}>
							Время течет
							<br />
							стремительно...
						</div>
						<div className={styles.main__divider}></div>
						<div className={styles.main__subtitle}>
							Миросфера <span>- порядок жизни</span>
						</div>
						<Link href="/contacts" className={styles.main__link}>
							С нами :)
						</Link>
					</div>
					<div className={styles.clock}>
						<ActiveClock
							activityValue={42}
							peopleCount={221}
							projectsCount={3}
							slowTimeSpeed={1}
						/>
					</div>
				</div>
			</Container>
		</main>
	);
};
