import { Rules } from '@/components/rules';
import { getMdData } from '@/store/md-prepear';

export default async function ContactsPage() {
	const rulesData = await getMdData('rules');

	return <Rules {...rulesData} />;
}
