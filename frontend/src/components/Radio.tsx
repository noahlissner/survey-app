import React from 'react';

interface Props {
	name: string;
	title: string;
	id: string;
	checked: string;
	onChange: any;
}

const Radio: React.FC<Props> = ({ name, title, id, checked, onChange }) => {
	return (
		<div className='flex items-center gap-3'>
			<input
				type='radio'
				name={name}
				id={id}
				className='hidden settings-general-radio-checkbox'
				value={id}
				checked={checked === id}
				onChange={onChange}
			/>
			<label htmlFor={id} className='flex items-center cursor-pointer text-lg'>
				<span className='w-5 h-5 inline-block mr-2 rounded-full border-[2px] border-blue-400'></span>
				{title}
			</label>
		</div>
	);
};

export default Radio;
