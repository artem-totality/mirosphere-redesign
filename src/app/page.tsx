import { Container } from '@/el/container';
import { Card } from '@/el/card';
import styles from './page.module.scss';

export default function Home() {
	return (
		<main>
			<Container>
				<div className={styles.development}>
					<Card>
						<a
							href="/partners"
							// className={styles.card}
							// target="_blank"
							// rel="noopener noreferrer"
						>
							<h2>
								Партнёрам <span>-&gt;</span>
							</h2>
							<p>Исследуйте нашу партнёрскую страничку</p>
						</a>
					</Card>
				</div>
			</Container>
		</main>
	);
}
