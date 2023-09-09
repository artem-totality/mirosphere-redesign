import React from 'react';
import { Container } from '@/el/container';
import { Card } from '@/el/card';
import styles from './promo.module.scss';

export const Promo = () => {
	return (
		<>
			<section className={styles.promo}>
				<Container>
					<div className={styles.promo__inner}>
						<div className={styles.promo__title}>
							Разработка WEB-приложений:
						</div>
						<div className={styles.promo__info}>
							Разработка компьютерного программного обеспечения под ключ любой
							сложности, для автоматизации бизнеса.
							<br />
							Надежность, скорость, современный дизайн
						</div>
						<div className={styles.promo__items}>
							<div className={styles.promo__item}>
								<Card>
									<div className={styles['promo__item-inner']}>
										<div className={styles['promo__item-top']}>
											<svg>
												<use href="#sandClockSvg" />
											</svg>
											<div className={styles['promo__item-title']}>
												Пока вы занимаетесь делом
											</div>
										</div>
										<div className={styles['promo__item-text']}>
											Мы превратили создание web-приложений в увлекательный,
											простой и интересный процесс
										</div>
									</div>
								</Card>
							</div>
							<div className={styles.promo__item}>
								<Card>
									<div className={styles['promo__item-inner']}>
										<div className={styles['promo__item-top']}>
											<svg>
												<use href="#collabSvg" />
											</svg>
											<div className={styles['promo__item-title']}>
												Ваши клиенты, сотрудники и партнёры
											</div>
										</div>
										<div className={styles['promo__item-text']}>
											Могут быть объединены в одном удобном цифровом
											пространстве
										</div>
									</div>
								</Card>
							</div>
							<div className={styles.promo__item}>
								<Card>
									<div className={styles['promo__item-inner']}>
										<div className={styles['promo__item-top']}>
											<svg>
												<use href="#clipboardSvg" />
											</svg>
											<div className={styles['promo__item-title']}>
												По расписанию
											</div>
										</div>
										<div className={styles['promo__item-text']}>
											Автоматические задачи выполняются по расписанию именно
											так, как вы всегда мечтали...
										</div>
									</div>
								</Card>
							</div>
							<div className={styles.promo__item}>
								<Card>
									<div className={styles['promo__item-inner']}>
										<div className={styles['promo__item-top']}>
											<svg>
												<use href="#magnifierSvg" />
											</svg>
											<div className={styles['promo__item-title']}>
												Отслеживание хода выполнения задач в проекте
											</div>
										</div>
										<div className={styles['promo__item-text']}>
											Иногда приятно понаблюдать, как лихо сотрудники и партнеры
											справляются со своими задачами
										</div>
									</div>
								</Card>
							</div>
							<div className={styles.promo__item}>
								<Card>
									<div className={styles['promo__item-inner']}>
										<div className={styles['promo__item-top']}>
											<svg>
												<use href="#networkingSvg" />
											</svg>
											<div className={styles['promo__item-title']}>
												Справедливое распределение результатов труда
											</div>
										</div>
										<div className={styles['promo__item-text']}>
											Вы знали, что с математической точки зрения, справедливое
											распределение ресурсов в команде - это решаемая задача? По
											крайней мере, для небольшого количества участников...
										</div>
									</div>
								</Card>
							</div>
							<div className={styles.promo__item}>
								<Card>
									<div className={styles['promo__item-inner']}>
										<div className={styles['promo__item-top']}>
											<svg>
												<use href="#statisticsSvg" />
											</svg>
											<div className={styles['promo__item-title']}>
												Статистика
											</div>
										</div>
										<div className={styles['promo__item-text']}>
											Нет ничего лучше, чем посмотреть на проделанное за
											последний год. Объёмы ошеломляют. Результат труда
											вдохновляет
										</div>
									</div>
								</Card>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<div className="svg-sprite">
				<svg>
					<defs>
						<symbol id="sandClockSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M15,11.79a1.39,1.39,0,0,0,1-1l.52-1.53.21.08A.18.18,0,0,0,17,9.25l.28-.82a.18.18,0,0,0-.11-.23L10.41,5.9a.19.19,0,0,0-.24.12l-.28.82a.18.18,0,0,0,.12.23l.21.07L9.69,8.7a1.13,1.13,0,0,0,.23,1.36l1.36,1.63-.15.45c-.52.12-1.88.41-2.07.47a1.37,1.37,0,0,0-1,1l-.45,1.32-.21-.07a.19.19,0,0,0-.23.11l-.28.82A.2.2,0,0,0,7,16l6.73,2.29a.2.2,0,0,0,.24-.11l.28-.82a.19.19,0,0,0-.12-.24L13.9,17l.46-1.34a1.13,1.13,0,0,0-.23-1.36L12.77,12.7l.15-.45ZM12.14,13l1.48,1.78c.12.14.18.21.19.28a.85.85,0,0,1-.08.44l-.45,1.35L8.22,15.1l.44-1.31a.76.76,0,0,1,.59-.55c.14,0,1.39-.32,2.2-.49a.33.33,0,0,0,.24-.22l.28-.8a.37.37,0,0,0-.06-.32L10.43,9.64h0a.77.77,0,0,1-.19-.28.88.88,0,0,1,.08-.45l.52-1.55,5.07,1.72-.52,1.53a.74.74,0,0,1-.59.54c-.14,0-1.4.32-2.2.5a.32.32,0,0,0-.25.21l-.27.8A.37.37,0,0,0,12.14,13Z"
							></path>
							<path
								fill="currentColor"
								d="M16.14,19.3l-.45.24-.07,0a.13.13,0,0,0-.08,0,8.81,8.81,0,0,1-2.06.65h0l-.5.08h0c-.31,0-.62.05-.94.05a8.4,8.4,0,0,1-7.91-5.61.88.88,0,0,1,0-.15A8.36,8.36,0,0,1,3.61,12,8.27,8.27,0,0,1,4,9.33l0-.06a.58.58,0,0,1,.05-.14l0-.07A8.42,8.42,0,0,1,10,3.82h0l.12,0h0a8,8,0,0,1,1.11-.17A.8.8,0,0,0,12,2.8h0a.82.82,0,0,0-.9-.8A10,10,0,0,0,4.93,4.89c-.18.19-.36.38-.53.58h0l0,0A9.91,9.91,0,0,0,2,11.69a.43.43,0,0,0,0,.05V12c0,.13,0,.26,0,.38v.05a10,10,0,0,0,2.07,5.7l0,0c.12.16.25.32.38.47l0,0,.42.44a10,10,0,0,0,5.38,2.8h0A10,10,0,0,0,12,22a9.85,9.85,0,0,0,4.22-.93L16.3,21l.09,0a5.52,5.52,0,0,0,.54-.28.8.8,0,1,0-.79-1.4Z"
							></path>
							<path
								fill="currentColor"
								d="M19,7.29a.82.82,0,0,0,.67.36.85.85,0,0,0,.45-.14.82.82,0,0,0,.22-1.12L20,5.89a.81.81,0,1,0-1.28,1Q18.84,7.08,19,7.29Z"
							></path>
							<path
								fill="currentColor"
								d="M20,9.41c.05.16.1.32.14.49a.82.82,0,0,0,.78.61.69.69,0,0,0,.2,0,.81.81,0,0,0,.58-1c-.05-.2-.11-.39-.17-.59a.8.8,0,0,0-1-.52A.82.82,0,0,0,20,9.41Z"
							></path>
							<path
								fill="currentColor"
								d="M19.48,17.4a.8.8,0,0,0-1.13.09l-.35.37A.81.81,0,0,0,18,19a.78.78,0,0,0,.56.23.82.82,0,0,0,.58-.24l.41-.45A.81.81,0,0,0,19.48,17.4Z"
							></path>
							<path
								fill="currentColor"
								d="M21.22,11.46a.8.8,0,0,0-.83.78,4.36,4.36,0,0,1,0,.51.82.82,0,0,0,.73.88h.07a.81.81,0,0,0,.8-.73c0-.21,0-.41,0-.61A.81.81,0,0,0,21.22,11.46Z"
							></path>
							<path
								fill="currentColor"
								d="M20.86,14.58a.8.8,0,0,0-1,.46c-.06.16-.13.31-.2.47A.81.81,0,0,0,20,16.58a.83.83,0,0,0,.34.07.81.81,0,0,0,.73-.46l.24-.57A.8.8,0,0,0,20.86,14.58Z"
							></path>
							<path
								fill="currentColor"
								d="M18.12,5.06A.81.81,0,0,0,18,3.93l-.5-.35a.81.81,0,1,0-.88,1.35l.42.29a.77.77,0,0,0,.48.16A.79.79,0,0,0,18.12,5.06Z"
							></path>
							<path
								fill="currentColor"
								d="M15.29,3.19a.8.8,0,0,0-.62-1l-.6-.11a.79.79,0,0,0-.91.67.8.8,0,0,0,.67.92l.5.09a.77.77,0,0,0,.5,0A.8.8,0,0,0,15.29,3.19Z"
							></path>
						</symbol>
						<symbol id="collabSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M12,2a2,2,0,1,0,2,2A2,2,0,0,0,12,2Zm0,3.33A1.33,1.33,0,1,1,13.33,4,1.32,1.32,0,0,1,12,5.33Z"
							></path>
							<path
								fill="currentColor"
								d="M19,13a2,2,0,1,0,2,2A2,2,0,0,0,19,13Zm0,3.33A1.33,1.33,0,1,1,20.33,15,1.32,1.32,0,0,1,19,16.33Z"
							></path>
							<path
								fill="currentColor"
								d="M5,13a2,2,0,1,0,2,2A2,2,0,0,0,5,13Zm0,3.33A1.33,1.33,0,1,1,6.33,15,1.32,1.32,0,0,1,5,16.33Z"
							></path>
							<path
								fill="currentColor"
								d="M15.31,18.93h0a.34.34,0,0,0-.44-.18h0a7.37,7.37,0,0,1-4.75.33l.31-.09a.33.33,0,0,0-.19-.64l-1.33.39a0,0,0,0,0,0,0l-.09.05,0,0a.44.44,0,0,0-.08.11.32.32,0,0,0,0,.14.61.61,0,0,0,0,.13v0l.67,1.27a.33.33,0,1,0,.59-.31l-.27-.51a8.08,8.08,0,0,0,5.44-.3A.34.34,0,0,0,15.31,18.93Z"
							></path>
							<path
								fill="currentColor"
								d="M20.9,10.76a.33.33,0,0,0-.47,0l-.47.48a8,8,0,0,0-4.83-6.6.34.34,0,0,0-.44.17.34.34,0,0,0,.18.44,7.34,7.34,0,0,1,4.41,5.89l-.38-.37a.33.33,0,1,0-.47.47l1,1a.33.33,0,0,0,.47,0h0l1-1A.34.34,0,0,0,20.9,10.76Z"
							></path>
							<path
								fill="currentColor"
								d="M9.33,4.89s0,0,0-.06h0l0,0,0-.06-.07,0,0,0L7.8,4a.33.33,0,0,0-.27.61L8.22,5A8,8,0,0,0,4,12a.34.34,0,0,0,.67,0A7.33,7.33,0,0,1,8.28,5.68L8,6.19a.34.34,0,0,0,.16.44.33.33,0,0,0,.14,0,.34.34,0,0,0,.3-.19L9.3,5.09h0a.19.19,0,0,0,0-.07V4.89Z"
							></path>
							<path
								fill="currentColor"
								d="M6.33,17.33H6.25l-.07,0a2.65,2.65,0,0,1-2.36,0l-.07,0H3.67A1.67,1.67,0,0,0,2,19v2a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V19A1.67,1.67,0,0,0,6.33,17.33Z"
							></path>
							<path
								fill="currentColor"
								d="M13.33,6.33h-.08l-.07,0a2.65,2.65,0,0,1-2.36,0l-.07,0h-.08A1.67,1.67,0,0,0,9,8v2a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V8A1.67,1.67,0,0,0,13.33,6.33Z"
							></path>
							<path
								fill="currentColor"
								d="M20.33,17.33h-.08l-.07,0a2.65,2.65,0,0,1-2.36,0l-.07,0h-.08A1.67,1.67,0,0,0,16,19v2a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V19A1.67,1.67,0,0,0,20.33,17.33Z"
							></path>
						</symbol>
						<symbol id="clipboardSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M18.3,4.8H16.5V3.9a.9.9,0,0,0-1.8,0v.9H12.9V3.9a.9.9,0,0,0-1.8,0v.9H9.3V3.9A.85.85,0,0,0,8.4,3a.85.85,0,0,0-.9.9v.9H5.7a.85.85,0,0,0-.9.9V20.1a.85.85,0,0,0,.9.9H18.3a.85.85,0,0,0,.9-.9V5.7A.85.85,0,0,0,18.3,4.8ZM12.9,17.4H7.5a.9.9,0,1,1,0-1.8h5.4a.9.9,0,1,1,0,1.8Zm3.6-3.6h-9a.9.9,0,0,1,0-1.8h9a.9.9,0,1,1,0,1.8Zm0-3.6h-9a.85.85,0,0,1-.9-.9.85.85,0,0,1,.9-.9h9a.85.85,0,0,1,.9.9A.85.85,0,0,1,16.5,10.2Z"
							></path>
						</symbol>
						<symbol id="magnifierSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M20.51,18.12,16.38,14A8.25,8.25,0,0,1,14,16.38l4.13,4.12a1.69,1.69,0,0,0,2.39-2.38Z"
							></path>
							<path
								fill="currentColor"
								d="M16.5,9.75A6.75,6.75,0,1,0,9.75,16.5,6.75,6.75,0,0,0,16.5,9.75ZM9.75,14.81a5.06,5.06,0,1,1,5.06-5.06A5.07,5.07,0,0,1,9.75,14.81Z"
							></path>
							<path
								fill="currentColor"
								d="M5.54,9.65H6.72A2.93,2.93,0,0,1,9.65,6.72V5.54A4.12,4.12,0,0,0,5.54,9.65Z"
							></path>
						</symbol>
						<symbol id="networkingSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M15.45,9.75v-1a.69.69,0,0,0-.25-.53,11.8,11.8,0,0,0-2-1.3,0,0,0,0,1,0,0V5.54A.65.65,0,0,0,13.43,5V3.59a1.28,1.28,0,0,0-1.28-1.28h-.3a1.29,1.29,0,0,0-1.27,1.28V5a.64.64,0,0,0,.28.54V6.9a.06.06,0,0,1,0,.06,11.42,11.42,0,0,0-2,1.29.71.71,0,0,0-.25.54v1Z"
							></path>
							<path
								fill="currentColor"
								d="M21.75,20.19a10.7,10.7,0,0,0-2-1.3,0,0,0,0,1,0-.05V17.47a.67.67,0,0,0,.29-.53V15.52a1.27,1.27,0,0,0-1.28-1.27h-.31a1.27,1.27,0,0,0-1.27,1.27h0v1.42a.66.66,0,0,0,.28.53v1.37a0,0,0,0,1,0,.05,11.74,11.74,0,0,0-2.11,1.3.67.67,0,0,0-.25.52v1H22v-1A.67.67,0,0,0,21.75,20.19Z"
							></path>
							<path
								fill="currentColor"
								d="M8.67,20.19a11,11,0,0,0-2-1.3,0,0,0,0,1,0-.05V17.47a.66.66,0,0,0,.28-.53V15.52a1.27,1.27,0,0,0-1.27-1.27H5.33a1.27,1.27,0,0,0-1.27,1.27v1.42a.66.66,0,0,0,.28.53v1.37a0,0,0,0,1,0,.05,11.58,11.58,0,0,0-2.09,1.3.67.67,0,0,0-.25.52v1H8.89v-1A.64.64,0,0,0,8.67,20.19Z"
							></path>
							<path
								fill="currentColor"
								d="M12,12.18a.46.46,0,0,0-.46.46h0a.47.47,0,0,0,.42.5h0a.47.47,0,0,0,.4-.53.47.47,0,0,0-.4-.4Z"
							></path>
							<circle fill="currentColor" cx="12" cy="13.99" r="0.46"></circle>
							<circle fill="currentColor" cx="12" cy="15.33" r="0.46"></circle>
							<path
								fill="currentColor"
								d="M12,10.83a.43.43,0,0,0-.32.14.46.46,0,0,0,0,.65.39.39,0,0,0,.32.13.46.46,0,0,0,.47-.44.48.48,0,0,0-.14-.34A.44.44,0,0,0,12,10.83Z"
							></path>
							<path
								fill="currentColor"
								d="M13.38,15.65a.45.45,0,0,0-.63.13.46.46,0,0,0,.13.64.46.46,0,0,0,.64-.14.45.45,0,0,0-.14-.63Z"
							></path>
							<circle
								fill="currentColor"
								cx="14.26"
								cy="16.79"
								r="0.46"
							></circle>
							<circle
								fill="currentColor"
								cx="15.39"
								cy="17.51"
								r="0.46"
							></circle>
							<path
								fill="currentColor"
								d="M10.63,15.65a.47.47,0,0,0-.15.64.49.49,0,0,0,.64.22l.05,0a.51.51,0,0,0-.46-.88Z"
							></path>
							<circle
								fill="currentColor"
								cx="9.74"
								cy="16.79"
								r="0.46"
							></circle>
							<circle
								fill="currentColor"
								cx="8.62"
								cy="17.51"
								r="0.46"
							></circle>
						</symbol>
						<symbol id="statisticsSvg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M5.67,11.44A1.57,1.57,0,0,0,6.77,11l1.56.78a1.23,1.23,0,0,0,0,.19,1.58,1.58,0,1,0,3.16,0,1.5,1.5,0,0,0-.16-.67l2.12-2.12a1.51,1.51,0,0,0,.68.16,1.58,1.58,0,0,0,1.58-1.58,1.45,1.45,0,0,0-.08-.47L17.45,5.9a1.54,1.54,0,0,0,.87.27,1.59,1.59,0,1,0-1.57-1.59,1.78,1.78,0,0,0,.07.47L15,6.43a1.52,1.52,0,0,0-.87-.27,1.58,1.58,0,0,0-1.58,1.58,1.55,1.55,0,0,0,.16.68l-2.12,2.12a1.58,1.58,0,0,0-.68-.16,1.54,1.54,0,0,0-1.09.45l-1.56-.78c0-.07,0-.13,0-.2a1.59,1.59,0,1,0-1.59,1.59Z"
							></path>
							<path
								fill="currentColor"
								d="M20.47,20h-.56V8.8a.53.53,0,0,0-.53-.53H17.27a.52.52,0,0,0-.52.53V20H15.69V12a.52.52,0,0,0-.53-.52H13.05a.52.52,0,0,0-.52.52v8H11.47V16.18a.52.52,0,0,0-.52-.52H8.84a.52.52,0,0,0-.53.52V20H7.25V14.07a.52.52,0,0,0-.52-.52H4.62a.52.52,0,0,0-.53.52V20H3.53a.52.52,0,0,0-.53.52.53.53,0,0,0,.53.53H20.47a.53.53,0,0,0,.53-.53A.52.52,0,0,0,20.47,20Z"
							></path>
						</symbol>
					</defs>
				</svg>
			</div>
		</>
	);
};
