import React from 'react';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import styles from './partners-contacts.module.scss';

export const PartnersContacts = () => {
	return (
		<section className={styles['partners-contacts']}>
			<Container>
				<div className={styles['partners-contacts__inner']}>
					<SectionTitle>Контакты:</SectionTitle>
					<div className={styles['partners-contacts__info']}>
						<div className={styles['partners-contacts__info-left']}>
							Присоединяйся к нашей команде. С нами интересно!
							<b> ;&#8209;)</b>
						</div>
						<div className={styles['partners-contacts__info-right']}>
							<div className={styles['partners-contacts__info-offer']}>
								Мы всегда ищем <span>новых членов,</span> которые привнесут в
								нашу команду энергию, креативность и страсть.
								<span> Как вы думаете,</span> у вас есть то, что нужно? Будем
								рады видеть <span>ваш отклик</span>!
							</div>
							<form className={styles['partners-contacts__form']}>
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
								<a
									href="#"
									className={styles['partners-contacts__form-file-upload']}
								>
									ваше резюме (опционально)
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
