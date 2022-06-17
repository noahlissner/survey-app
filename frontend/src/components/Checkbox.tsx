import React from 'react';

interface Props {
	name: string;
	title: string;
	id: string;
}

const Checkbox: React.FC<Props> = ({ title, name, id }) => {
	return (
		<div className='flex items-center gap-3'>
			<input
				type='checkbox'
				name={name}
				id={id}
				className='hidden settings-general-radio-checkbox'
			/>
			<label htmlFor={id} className='flex items-center cursor-pointer text-lg'>
				<span className='w-5 h-5 border-[2px] border-blue-400 mr-2 flex rounded'></span>
				{title}
			</label>
		</div>
	);
};

export default Checkbox;
