import React from 'react';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import styles from './contacts.module.scss';

export const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<Container>
				<div className={styles.contacts__inner}>
					<SectionTitle>Контакты:</SectionTitle>
					<div className={styles.contacts__info}>
						<div className={styles['contacts__info-left']}>
							Разработка web&#8209;приложений любой сложности под ключ
						</div>
						<div className={styles['contacts__info-right']}>
							<div className={styles['contacts__info-offer']}>
								Мы всегда ищем <span>новых членов,</span> которые привнесут в
								нашу команду энергию, креативность и страсть.
								<span>Как вы думаете,</span> у вас есть то, что нужно? Будем
								рады видеть <span>ваше резюме</span>!
							</div>
							<form className={styles.contacts__form}>
								<input
									type="text"
									placeholder="ваша электронная почта"
									required
								/>
								<input type="text" placeholder="ваше полное имя" required />
								<textarea
									cols={40}
									rows={10}
									aria-required="true"
									aria-invalid="false"
									placeholder="пару слов о вашем опыте"
									name="job-experience"
								></textarea>
								<a href="#" className={styles['contacts__form-file-upload']}>
									прикрепите ваше резюме
								</a>
								<button type="submit">Отправить</button>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
