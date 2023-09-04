import '@/styles/normalize.scss';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { BurgerMenu } from '@/el/burger-menu';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Sparks } from '@/el/sparks';

export const metadata: Metadata = {
	title: 'Миросфера',
	description: 'Миросфера - твоя сфера опоры в современном мире',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body>
				<div id="app-wrapper">
					<BurgerMenu
						className="burger-menu"
						pageWrapId={'page-wrapper'}
						outerContainerId={'app-wrapper'}
						width={256}
					/>
					<Header />
					<div id="page-wrapper">
						<>{children}</>
						<Footer />
					</div>
					<Sparks />
				</div>
			</body>
		</html>
	);
}
