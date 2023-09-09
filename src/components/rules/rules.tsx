import React from 'react';
import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import { Card } from '@/el/card';
import { MdData } from '@/store/md-prepear';
import styles from './rules.module.scss';

export const Rules: NextPage<MdData> = ({ content }) => {
	return (
		<section className={styles.rules}>
			<Container>
				<div className={styles.rules__inner}>
					<SectionTitle>Устав:</SectionTitle>
					<Card>
						<ReactMarkdown
							components={{
								h2: ({ children }) => {
									return <h2 className={styles.rules__h2}>{children}</h2>;
								},
								h3: ({ children }) => {
									return <h3 className={styles.rules__h3}>{children}</h3>;
								},
								h5: ({ children }) => {
									return <h5 className={styles.rules__h5}>{children}</h5>;
								},
								p: ({ children }) => {
									return (
										<div className={styles.rules__paragraph}>{children}</div>
									);
								},
							}}
						>
							{content}
						</ReactMarkdown>
					</Card>
				</div>
			</Container>
		</section>
	);
};
