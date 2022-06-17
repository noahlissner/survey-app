import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../Input';

const ShortText: React.FC<any> = ({ handler, data }) => {
	const [answer, setAnswer] = useState('');
	const [chars, setChars] = useState(0);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAnswer(e.target.value.slice(0, 50));
		handler(data._id, answer);
	};

	useEffect(() => {
		setChars(answer.length);
	}, [answer]);

	return (
		<div className='bg-blue-100 dark:bg-blue-850 rounded-3xl p-10 w-full shadow-lg'>
			<div className='mb-7'>
				<h1>{data.name}</h1>
				<p>
					{data.question} |{' '}
					<span className='italic text-sm'>{chars}/50 characters</span>
				</p>
			</div>
			<Input
				onChange={onChange}
				value={answer}
				name='question'
				type='text'
				icon=''
			/>
		</div>
	);
};

export default ShortText;
