import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { edit, editPassword, reset } from '../../features/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Profile {
	firstName: string;
	lastName: string;
	email: string;
}

interface Password {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
}

const SettingsAccount: React.FC = () => {
	const notify = (message: string) => {
		toast(message, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state: RootState) => state.auth
	);

	const [profile, setProfile] = useState<Profile>({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
	});

	const [password, setPassword] = useState<Password>({
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	const dispatch = useDispatch<AppDispatch>();

	const { firstName, lastName, email } = profile;

	useEffect(() => {
		if (isError) notify('🚨 ' + message);
		if (isSuccess) notify('✅ ' + 'Successfully changed password');

		dispatch(reset());
	}, [user, isLoading, isError, isSuccess, message, dispatch]);

	const profileChange = (e: ChangeEvent<HTMLInputElement>) => {
		setProfile({ ...profile, [e.target.name]: e.target.value });
	};

	const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword({ ...password, [e.target.name]: e.target.value });
	};

	const profileSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(edit(profile));
	};

	const passwordSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			password.oldPassword != '' &&
			password.newPassword != '' &&
			password.confirmPassword != ''
		) {
			if (password.newPassword === password.confirmPassword)
				dispatch(editPassword(password));
		}
	};

	return (
		<div className='w-full'>
			<div className='flex flex-col items-center text-black dark:text-white'>
				<h1 className='text-6xl mb-10'>Account</h1>
				<div className='flex flex-col items-start gap-10'>
					<form className='flex flex-col' onSubmit={profileSubmit}>
						<h3 className='font-medium text-2xl'>Profile</h3>
						<p>Some information about you</p>
						<div className='flex gap-5 my-5'>
							<div className='flex flex-col'>
								<span>First name</span>
								<input
									className='settings-account-input'
									value={firstName}
									onChange={profileChange}
									name='firstName'
									type='text'
								/>
							</div>
							<div className='flex flex-col'>
								<span>Last name</span>
								<input
									className='settings-account-input'
									value={lastName}
									onChange={profileChange}
									name='lastName'
									type='text'
								/>
							</div>
						</div>
						<div className='flex flex-col'>
							<span>Email</span>
							<input
								className='settings-account-input'
								value={email}
								onChange={profileChange}
								name='email'
								type='text'
							/>
						</div>
						<button className='settings-account-btn'>Change</button>
					</form>
					<form className='flex flex-col w-full' onSubmit={passwordSubmit}>
						<p className='font-medium text-2xl'>Password</p>
						<span>Change your password</span>
						<div className='flex flex-col items-center gap-5 mt-5'>
							<div className='flex flex-col'>
								<span>Current Password</span>
								<input
									onChange={passwordChange}
									name='oldPassword'
									type='password'
									className='settings-account-input'
								/>
							</div>
							<div className='flex flex-col'>
								<span>New Password</span>
								<input
									onChange={passwordChange}
									name='newPassword'
									type='password'
									className='settings-account-input'
								/>
							</div>
							<div className='flex flex-col'>
								<span>Confirm New Password</span>
								<input
									onChange={passwordChange}
									name='confirmPassword'
									type='password'
									className='settings-account-input'
								/>
							</div>
						</div>
						<button className='settings-account-btn'>Change</button>
					</form>
				</div>
			</div>
			<ToastContainer theme='dark' />
		</div>
	);
};

export default SettingsAccount;
