import fs from 'fs';
import path from 'path';

export type MdData = {
	id: string;
	content: string;
};

const postsDirectory = path.join(process.cwd(), 'md');

export async function getMdData(id: string): Promise<MdData> {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Combine the content with the id
	return {
		id,
		content: fileContents,
	};
}
