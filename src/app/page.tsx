import { Main } from '@/components/main';
import { Promo } from '@/components/promo';
import { Products } from '@/components/products';
import { Command } from '@/components/command';

export default function Home() {
	return (
		<>
			<Main />
			<Promo />
			<Products />
			<Command />
		</>
	);
}
