import React from 'react';
import { Container } from '@/el/container';
import { SectionTitle } from '@/el/section-title';
import { Card } from '@/el/card';
import styles from './clients.module.scss';

export const Clients = () => {
	return (
		<>
			<section className={styles.clients}>
				<Container>
					<div className={styles.clients__inner}>
						<SectionTitle>Клиентам:</SectionTitle>
						<div className={styles['clients-products']}>
							<div className={styles['clients-products__subtitle']}>
								Наши продукты:
							</div>
							<div className={styles['clients-products__info']}>
								Мы предлагаем линейку стандартных решений. А так же рассмотрим
								Ваши индивидуальные требования и пожелания.
							</div>
							<div className={styles['clients-products__items']}>
								<div className={styles['clients-product']}>
									<Card>
										<div className={styles['clients-product__inner']}>
											<div className={styles['clients-product__top']}>
												<div className={styles['clients-product__img']}>
													<svg>
														<use href="#expressSvg" />
													</svg>
												</div>
												<div className={styles['clients-product__title']}>
													Экспресс разработка
												</div>
											</div>
											<div className={styles['clients-product__info']}>
												Быстрая скорость создания и развёртки для простых задач.
											</div>
											<div className={styles['clients-product__price']}>
												12 000
											</div>
										</div>
									</Card>
								</div>
								<div className={styles['clients-product']}>
									<Card>
										<div className={styles['clients-product__inner']}>
											<div className={styles['clients-product__top']}>
												<div className={styles['clients-product__img']}>
													<svg>
														<use href="#designSvg" />
													</svg>
												</div>
												<div className={styles['clients-product__title']}>
													Дизайн сайта
												</div>
											</div>
											<div className={styles['clients-product__info']}>
												Задачи требующие индивидуального подхода и нелинейной
												реализации.
											</div>
											<div className={styles['clients-product__price']}>
												25 000
											</div>
										</div>
									</Card>
								</div>
								<div className={styles['clients-product']}>
									<Card>
										<div className={styles['clients-product__inner']}>
											<div className={styles['clients-product__top']}>
												<div className={styles['clients-product__img']}>
													<svg>
														<use href="#autoSystemSvg" />
													</svg>
												</div>
												<div className={styles['clients-product__title']}>
													Система автоматизации
												</div>
											</div>
											<div className={styles['clients-product__info']}>
												Системные решения для бизнеса и организаций.
											</div>
											<div className={styles['clients-product__price']}>
												300 000
											</div>
										</div>
									</Card>
								</div>
							</div>
						</div>
						<a href="/contacts" className={styles.clients__link}>
							Заказать
						</a>
					</div>
				</Container>
			</section>
			<div className="svg-sprite">
				<svg>
					<defs>
						<symbol id="expressSvg" viewBox="0 0 100 100">
							<path
								fill="currentColor"
								d="M80,42V33a3,3,0,0,0-3-3H38v2H36V30H23a3,3,0,0,0-3,3v9a8,8,0,0,1,0,16h0v9a3,3,0,0,0,3,3H36V68h2v2H77a3,3,0,0,0,3-3V58a8,8,0,0,1,0-16ZM38,64H36V60h2Zm0-8H36V52h2Zm0-8H36V44h2Zm0-8H36V36h2ZM51,53.62,49.13,55l-2-2.75L45,55l-1.87-1.33,2-2.9-3.11-1,.69-2.18,3,1V45.05h2.53v3.52l3-1,.68,2.18-3.11,1Zm15.84,0L65,55l-2-2.75L60.85,55,59,53.62,61,50.72l-3.11-1,.68-2.18,3,1V45.05h2.53v3.52l3-1,.69,2.18-3.11,1Z"
							/>
						</symbol>
						<symbol id="designSvg" viewBox="0 0 100 100">
							<path
								fill="currentColor"
								d="m74 42a2 2 0 0 1 2 1.85v28.15a6 6 0 0 1 -5.78 6h-40.22a6 6 0 0 1 -6-5.78v-28.22a2 2 0 0 1 1.85-2zm-15.5 8.34-.12.1-11.45 12.41-5.2-5a1.51 1.51 0 0 0 -2-.1l-.11.1-2.14 1.92a1.2 1.2 0 0 0 -.1 1.81l.1.11 7.33 6.94a3.07 3.07 0 0 0 2.14.89 2.81 2.81 0 0 0 2.13-.89l5.92-6.29.43-.44.42-.45.55-.58.21-.22.42-.44 5.62-5.93a1.54 1.54 0 0 0 .08-1.82l-.08-.1-2.14-1.92a1.51 1.51 0 0 0 -2.01-.1zm15.5-28.34a6 6 0 0 1 6 6v6a2 2 0 0 1 -2 2h-56a2 2 0 0 1 -2-2v-6a6 6 0 0 1 6-6z"
							/>
						</symbol>
						<symbol id="autoSystemSvg" viewBox="0 0 100 100">
							<path
								fill="currentColor"
								d="M37,20H26a6.07,6.07,0,0,0-6,6.14V36.38h0a6.07,6.07,0,0,0,6,6.14H37a6.07,6.07,0,0,0,6-6.14V26.13h0A6.07,6.07,0,0,0,37,20ZM32,36.38H31a5.13,5.13,0,0,1,0-10.25h1a5.13,5.13,0,1,1,0,10.25Z"
							/>
							<path
								fill="currentColor"
								d="M55,42.52H66a6.07,6.07,0,0,0,6-6.14V26.13h0A6.08,6.08,0,0,0,66,20H55a6.07,6.07,0,0,0-6,6.14V36.38h0A6.07,6.07,0,0,0,55,42.52Zm5-16.39h1a5.13,5.13,0,0,1,0,10.25H60a5.13,5.13,0,0,1,0-10.25Z"
							/>
							<path
								fill="currentColor"
								d="M37,48.66H26a6.08,6.08,0,0,0-6,6.15V65a6.09,6.09,0,0,0,6,6.16H37A6.09,6.09,0,0,0,43,65V54.81A6.08,6.08,0,0,0,37,48.66ZM32,65H31a5.12,5.12,0,0,1,0-10.19h1v0A5.12,5.12,0,0,1,32,65Z"
							/>
							<path
								fill="currentColor"
								d="M79.1,61.33c-.78-.13-1.56-.13-2.35-.26a.29.29,0,0,1-.26-.27,26.06,26.06,0,0,0-1-2.53v-.4c.39-.67,1-1.34,1.43-2a1,1,0,0,0-.13-1.33l-2.6-2.67a1,1,0,0,0-.65-.26,2.16,2.16,0,0,0-.65.26c-.66.4-1.31,1.07-2,1.47a.13.13,0,0,0-.13.13h-.13c-.91-.26-1.56-.8-2.47-1.06a.27.27,0,0,1-.26-.27c-.13-.8-.13-1.47-.26-2.27A1.1,1.1,0,0,0,67,48.8a.4.4,0,0,0-.26-.14H62.94a1.15,1.15,0,0,0-.65.14c-.26.26-.66.66-.66,1.06a13.38,13.38,0,0,1-.26,2.27.29.29,0,0,1-.26.27c-.91.26-1.56.8-2.47,1.06h-.13c-.13,0-.13,0-.26-.13-.64-.52-1.31-1-2-1.47a.76.76,0,0,0-.65-.26c-.39,0-.39.13-.78.26l-2.6,2.67a1,1,0,0,0-.13,1.33c.39.67,1,1.21,1.43,2a.25.25,0,0,1,0,.35l0,0c-.26.93-.78,1.6-1,2.53a.29.29,0,0,1-.26.27c-.79.13-1.44.13-2.22.26a1.11,1.11,0,0,0-1,.8v4.55a2.13,2.13,0,0,0,1,.8,12.69,12.69,0,0,1,2.22.26.28.28,0,0,1,.26.27c.26.93.78,1.6,1,2.53,0,.14.13.27,0,.4-.39.67-1,1.34-1.43,2a1,1,0,0,0,.13,1.34l2.6,2.66c.26.27.39.27.78.27a2,2,0,0,0,.65-.27,21.65,21.65,0,0,1,2-1.46c.13,0,.13-.14.26-.14h.13c.91.27,1.56.8,2.47,1.07a.27.27,0,0,1,.26.27c.13.8.13,1.6.26,2.4s.4.93,1,.93h3.78c.66,0,.92-.27,1-.93s.13-1.6.26-2.4A.27.27,0,0,1,68,76.4H68a25.57,25.57,0,0,0,2.47-1.07h.13a.13.13,0,0,1,.13.13h0c.65.4,1.3,1.06,2,1.46a1,1,0,0,0,.65.27c.26,0,.39-.13.78-.27l2.6-2.66a1.06,1.06,0,0,0,.13-1.34c-.39-.66-1-1.2-1.43-2a.25.25,0,0,1,0-.35.12.12,0,0,1,0,0c.26-.93.78-1.6,1-2.53a.28.28,0,0,1,.26-.27c.79-.13,1.57-.13,2.35-.26s.91-.4.91-1.07V62.67C80,61.73,79.75,61.47,79.1,61.33ZM64.63,70.41a5.84,5.84,0,0,1-5.86-5.8V64.4a5.87,5.87,0,0,1,11.73,0A6.18,6.18,0,0,1,64.63,70.41Z"
							/>
						</symbol>
					</defs>
				</svg>
			</div>
		</>
	);
};
