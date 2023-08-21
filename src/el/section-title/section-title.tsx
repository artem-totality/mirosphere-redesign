import React from 'react';
import styles from './section-title.module.scss';

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles['section-title']}>{children}</div>;
};
