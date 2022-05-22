import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { FiLogIn } from "react-icons/fi";
import { BsPersonLinesFill, BsEyeFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(register(userData));
  };

  return (
    <div className="relative overflow-hidden h-screen w-screen bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center">
      <nav className="fixed w-full flex justify-between items-center py-5 px-10">
        <div className="flex items-center gap-5">
          <img
            className="mr-10"
            src="http://acmelogos.com/images/logo-7.svg"
            alt="Logo"
          />
          <Link className="font-medium" to="/">
            Home
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="font-medium flex items-center gap-2" to="/login">
            <FiLogIn /> Login
          </Link>
        </div>
      </nav>
      <main className="h-full w-9/12 flex justify-center flex-col">
        <h1 className="font-semibold text-6xl mb-7">
          Create new account<span className="text-blue-400 text-6xl">.</span>
        </h1>
        <div className="flex gap-2 mb-12">
          <p>Already a Member?</p>
          <Link
            className="text-blue-400 duration-150 hover:text-blue-450"
            to="/login"
          >
            Log In
          </Link>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center gap-5 max-w-[473px]"
        >
          <div className="flex w-full justify-between">
            <div className="flex gap-11">
              <div>
                <Input
                  onChange={onChange}
                  value={firstName}
                  label="First name"
                  name="firstName"
                  type="text"
                  icon={<BsPersonLinesFill />}
                />
              </div>
              <div>
                <Input
                  onChange={onChange}
                  value={lastName}
                  label="Last name"
                  name="lastName"
                  type="text"
                  icon={<BsPersonLinesFill />}
                />
              </div>
            </div>
          </div>
          <Input
            onChange={onChange}
            value={email}
            label="Email"
            name="email"
            type="email"
            icon={<MdMail />}
          />
          <Input
            onChange={onChange}
            value={password}
            label="Password"
            name="password"
            type="password"
            icon={<BsEyeFill />}
          />
          {/* <div className='bg-blue-300 shadow-md rounded-xl w-[480px] p-4 flex gap-3 items-center'>
						<div className='flex flex-col w-full'>
							<label className='text-gray-400 text-sm' htmlFor='email'>
								Email
							</label>
							<input
								className='w-full bg-transparent border-b-2 border-b-gray-400'
								type='email'
								name='email'
								value={email}
								onChange={onChange}
							/>
						</div>
						<div>
							<MdMail className='text-lg' />
						</div>
					</div>
					<div className='bg-blue-300 shadow-md rounded-xl w-[480px] p-4 flex gap-3 items-center'>
						<div className='flex flex-col w-full'>
							<label className='text-gray-400 text-sm' htmlFor='password'>
								Password
							</label>
							<input
								className='w-full bg-transparent border-b-2 border-b-gray-400'
								type='password'
								name='password'
								value={password}
								onChange={onChange}
							/>
						</div>
						<div>
							<BsEyeFill className='text-lg' />
						</div>
					</div> */}
          <Button value="Create account" />
          {/* <input
						className='bg-blue-400 w-fit py-5 px-8 mt-10 rounded-full text-white cursor-pointer'
						type='submit'
						value='Create account'
					/> */}
        </form>
      </main>
      <img
        className="absolute h-[70rem] bottom-[-15rem] right-[-15rem] pointer-events-none"
        src="https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/9e84d9f6-690f-4e10-c09d-be3578372a00/public"
        alt=""
      />
    </div>
  );
};

export default Register;
