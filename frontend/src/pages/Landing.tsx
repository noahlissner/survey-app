import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
	return (
		<div className='relative overflow-hidden h-screen w-screen bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center'>
			<nav className='fixed w-full flex justify-between items-center py-5 px-10'>
				<div className='flex items-center gap-5'>
					<img
						className='mr-10'
						src='http://acmelogos.com/images/logo-7.svg'
						alt='Logo'
					/>
					<Link className='font-medium' to='/'>
						Home
					</Link>
				</div>
				<div className='flex items-center'>
					<Link className='font-medium flex items-center gap-2' to='/login'>
						<FiLogIn /> Login
					</Link>
				</div>
			</nav>
			<main className='h-full w-9/12 flex justify-center flex-col'>
				<h1 className='font-semibold text-6xl mb-7'>
					Company Name<span className='text-blue-400 text-6xl'>.</span>
				</h1>
				<p className='w-1/2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
					placeat repellat voluptatum, aut quia incidunt facere, eum sint quidem
					doloribus quod hic deserunt tempore mollitia impedit dicta ducimus,
					cum repellendus.
				</p>
				<Link
					to='/register'
					className='bg-blue-400 mt-16 text-white w-[225px] h-[65px] rounded-full text-lg flex items-center justify-center'
				>
					Join now
				</Link>
			</main>
			<img
				className='absolute h-[30rem] bottom-[50rem] right-[40rem] pointer-events-none'
				src='https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/4bf62a87-6156-422a-94a1-d53d874ce000/public'
				alt=''
			/>
			<img
				className='absolute h-[70rem] bottom-[-15rem] right-[-15rem] pointer-events-none'
				src='https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/5b077803-c9c3-4d2c-bb82-6340ca534500/public'
				alt=''
			/>
		</div>
	);
};

export default Landing;
