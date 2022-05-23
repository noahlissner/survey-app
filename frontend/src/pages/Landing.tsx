import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navigation from '../components/Navigation';

const Landing = () => {
  const { user } = useSelector((state: any) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  });
	return (
		<div className='relative overflow-hidden h-screen w-screen bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-800 flex justify-center'>
			<Navigation />
			<main className='h-full p-10 lg:p-0 lg:w-9/12 flex items-center lg:items-start justify-center flex-col'>
				<h1 className='font-semibold text-2xl place-self-start mb-5 lg:text-6xl lg:mb-7 dark:text-white'>
					Company Name<span className='text-blue-400 text-6xl'>.</span>
				</h1>
				<p className='lg:w-1/2 dark:text-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
					placeat repellat voluptatum, aut quia incidunt facere, eum sint quidem
					doloribus quod hic deserunt tempore mollitia impedit dicta ducimus,
					cum repellendus.
				</p>
				<Link
					to='/register'
					className='bg-blue-400 mt-16 text-white w-[225px] h-[65px] rounded-full duration-150 text-lg hover:bg-[#1a80cd] active:scale-[0.97] flex items-center justify-center'
				>
					Join now
				</Link>
			</main>
			<img
				className='hidden absolute h-[40rem] bottom-[-10rem] right-[-10rem] pointer-events-none lg:block xl:h-[50rem]'
				src='https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/521d5abb-c4fb-460e-a18e-b91bcc4a8500/public'
				alt=''
			/>
		</div>
	);
};

export default Landing;
