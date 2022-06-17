import { ChangeEvent, useState } from 'react';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

const MultipleChoice: React.FC<any> = ({ data }) => {
	const [checked, setChecked] = useState(data.options[0].id);

	const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.value);
	};

	return (
		<div className='bg-blue-100 dark:bg-blue-850 rounded-3xl p-10 w-full shadow-lg'>
			<div className='mb-7'>
				<h1>{data.name}</h1>
				<p>{data.question}</p>
			</div>
			<div className='flex flex-col gap-2'>
				{data.options.map((item: any) => (
					<Radio
						name={item.id}
						id={item.id}
						title={item.text}
						checked={checked}
						onChange={checkedHandler}
					/>
				))}
			</div>
		</div>
	);
};

export default MultipleChoice;
