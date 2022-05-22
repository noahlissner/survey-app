import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';

interface Props {
	onChange: any;
	value: string;
	label: string;
	name: string;
	type: string;
	icon: any;
}

const Input = ({ onChange, value, label, name, type, icon }: Props) => {
	return (
		<div className='relative w-full bg-blue-300 rounded-[20px] flex items-center'>
			<input
				type={type}
				id={name}
				name={name}
				className='bg-transparent block px-4 pb-3 pt-6 w-full focus:outline-none focus:border-blue-600 peer text-lg'
				placeholder=' '
				onChange={onChange}
				value={value}
			/>
			<label
				htmlFor={name}
				className='text-black pointer-events-none absolute text-base duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-focus:text-gray-400 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
			>
				{label}
			</label>
			<div className='pr-4'>{icon}</div>
		</div>
	);
};

export default Input;
