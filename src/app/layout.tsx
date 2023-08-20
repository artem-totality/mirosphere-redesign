import '@/styles/normalize.scss';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Header } from '@/el/header';
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
				<Header />
				<>{children}</>
				<Sparks />
			</body>
		</html>
	);
}
