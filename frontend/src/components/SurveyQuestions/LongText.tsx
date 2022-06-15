const LongText: React.FC<any> = ({ data }) => {
	return (
		<div className='bg-slate-400 rounded-3xl'>
			<h1>{data.name}</h1>
			<p>{data.question}</p>
		</div>
	);
};

export default LongText;
