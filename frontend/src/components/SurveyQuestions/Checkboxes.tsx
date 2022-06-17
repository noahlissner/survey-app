import Checkbox from '../Checkbox';

const Checkboxes: React.FC<any> = ({ data }) => {
	return (
		<div className='bg-blue-100 dark:bg-blue-850 rounded-3xl p-10 w-full shadow-lg'>
			<div className='mb-7'>
				<h1>{data.name}</h1>
				<p>{data.question}</p>
			</div>
			<div className='flex flex-col gap-2'>
				{data.options.map((item: any) => (
					<Checkbox name={item.id} id={item.id} title={item.text} />
				))}
			</div>
		</div>
	);
};

export default Checkboxes;
