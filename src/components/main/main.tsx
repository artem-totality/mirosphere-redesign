import React from 'react';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import { Card } from '@/el/card';
import styles from './main.module.scss';

export const Main = () => {
	return (
		<main className="main">
			<Container>
				<div className="main__inner">
					<div className="main__content">
						<div className="main__title">
							Время течет
							<br />
							стремительно...
						</div>
						<div className="main__divider"></div>
						<div className="main__subtitle">
							Миросфера <span>- порядок жизни</span>
						</div>
						<a href="#" className="main__link">
							С нами
						</a>
					</div>
					<div className="clock"></div>
				</div>
			</Container>
		</main>
	);
};
