import { ChangeEvent, useEffect, useState } from 'react';
import MultiInput from '../MultiInput';

const LongText: React.FC<any> = ({ data }) => {
	const [answer, setAnswer] = useState('');
	const [chars, setChars] = useState(0);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAnswer(e.target.value);
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
					<span className='italic text-sm'>{chars} characters</span>
				</p>
			</div>
			<MultiInput
				onChange={onChange}
				value={answer}
				label={data.question}
				name='question'
				type='text'
				icon=''
			/>
		</div>
	);
};

export default LongText;
