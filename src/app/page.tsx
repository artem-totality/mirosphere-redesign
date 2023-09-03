import { Main } from '@/components/main';
import { Promo } from '@/components/promo';
import { Products } from '@/components/products';
import { Development } from '@/components/development';

export default function Home() {
	return (
		<>
			<Main />
			<Promo />
			<Products />
			<Development />
		</>
	);
}
