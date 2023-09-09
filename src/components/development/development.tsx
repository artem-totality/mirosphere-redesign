import React from 'react';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import { Card } from '@/el/card';
import styles from './development.module.scss';

export const Development = () => {
	return (
		<section>
			<Container>
				<SectionTitle>Эта страница в процессе разработки...</SectionTitle>
				<div className={styles.development}>
					<Card>
						<a href="/partners">
							<h2>
								Партнёрам <span>-&gt;</span>
							</h2>
							<p>Исследуйте пока нашу партнёрскую страничку</p>
						</a>
					</Card>
				</div>
			</Container>
		</section>
	);
};
