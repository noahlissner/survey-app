import HomeTitle from '../components/HomeTitle';
import { IoOpen, IoOptions } from 'react-icons/io5';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

const Dashboard = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	const chartData = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'My First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
			},
		],
	};
	return (
		<div className='h-full p-[100px] pt-[50px]'>
			<HomeTitle title='Dashboard' />
			<section className='h-full mt-8 flex flex-col gap-5'>
				<div className='w-full flex gap-5 h-[60%] border-2 border-red-600'>
					<h1>Answers and Users</h1>
					<div>
						<Line data={chartData} />
					</div>
				</div>

				<div className='w-full flex gap-5 h-[40%] border-2 border-green-600'></div>

				{/* <div className='w-full flex gap-5 h-[10rem]'>
					<div className='flex flex-col bg-blue-300 w-1/3 h-full shadow-md rounded-xl p-5 justify-between'>
						<div className='flex justify-between items-center'>
							<div>
								<h1 className='font-semibold text-xl'>Survey #012</h1>
								<p className='text-gray-400'>Survey label or something</p>
							</div>
							<IoOptions className='text-blue-400 text-2xl' />
						</div>
						<h1 className='font-normal text-lg'>
							Answers: <span className='font-semibold'>12</span>
						</h1>
						<h1 className='font-normal text-lg'>
							Views: <span className='font-semibold'>34</span>
						</h1>
						<div className='flex w-full items-center gap-3'>
							<p className='text-gray-400 text-lg'>Goto survey</p>
							<IoOpen className='text-blue-400 text-2xl' />
						</div>
					</div>
					<div className='flex flex-col bg-blue-300 w-1/3 h-full shadow-md rounded-xl p-5 justify-between'>
						<div className='flex justify-between items-center'>
							<div>
								<h1 className='font-semibold text-xl'>Survey #012</h1>
								<p className='text-gray-400'>Survey label or something</p>
							</div>
							<IoOptions className='text-blue-400 text-2xl' />
						</div>
						<h1 className='font-normal text-lg'>
							Answers: <span className='font-semibold'>12</span>
						</h1>
						<h1 className='font-normal text-lg'>
							Views: <span className='font-semibold'>34</span>
						</h1>
						<div className='flex w-full items-center gap-3'>
							<p className='text-gray-400 text-lg'>Goto survey</p>
							<IoOpen className='text-blue-400 text-2xl' />
						</div>
					</div>
					<div className='flex flex-col bg-blue-300 w-1/3 h-full shadow-md rounded-xl p-5 justify-between'>
						<div className='flex justify-between items-center'>
							<div>
								<h1 className='font-semibold text-xl'>Survey #012</h1>
								<p className='text-gray-400'>Survey label or something</p>
							</div>
							<IoOptions className='text-blue-400 text-2xl' />
						</div>
						<h1 className='font-normal text-lg'>
							Answers: <span className='font-semibold'>12</span>
						</h1>
						<h1 className='font-normal text-lg'>
							Views: <span className='font-semibold'>34</span>
						</h1>
						<div className='flex w-full items-center gap-3'>
							<p className='text-gray-400 text-lg'>Goto survey</p>
							<IoOpen className='text-blue-400 text-2xl' />
						</div>
					</div>
				</div> */}

				{/* <div className='flex gap-5'>
					<div className='flex flex-col bg-blue-300 w-1/2 h-[15rem] shadow-md rounded-xl p-5 justify-between'>
						<h1>Global Stats</h1>
					</div>

					<div className='flex flex-col bg-blue-300 w-1/2 h-[15rem] shadow-md rounded-xl p-5 justify-between'>
						<h1>Latest survey answers</h1>
					</div>
				</div> */}
			</section>
		</div>
	);
};

export default Dashboard;
