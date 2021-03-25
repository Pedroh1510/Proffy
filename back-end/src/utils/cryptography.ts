import bcripy from 'bcrypt';

const secret = 'aaa!e';

export const encrypt = async (data: string) => {
	return await bcripy.hash(data, 10);
};

interface validHashProps {
	text: string;
	hash: string;
}

export const isValidHash = async (data: validHashProps) => {
	return await bcripy.compare(data.text, data.hash);
};
