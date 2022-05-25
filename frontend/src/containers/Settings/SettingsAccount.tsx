import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
}

const SettingsAccount: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const [profile, setProfile] = useState<Profile>({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const { firstName, lastName, email } = profile;

  const profileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const profileSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profile);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center text-black dark:text-white">
        <h1 className="text-6xl mb-10">Account</h1>
        <div className="flex flex-col items-start gap-10">
          <form className="flex flex-col" onSubmit={profileSubmit}>
            <h3 className="font-medium text-2xl">Profile</h3>
            <p>Some information about you</p>
            <div className="flex gap-5 my-5">
              <div className="flex flex-col">
                <span>First name</span>
                <input
                  className="settings-account-input"
                  value={firstName}
                  onChange={profileChange}
                  name="firstName"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <span>Last name</span>
                <input
                  className="settings-account-input"
                  value={lastName}
                  onChange={profileChange}
                  name="lastName"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span>Email</span>
              <input
                className="settings-account-input"
                value={email}
                onChange={profileChange}
                name="email"
                type="text"
              />
            </div>
            <button className="settings-account-btn">Change</button>
          </form>
          <form className="flex flex-col">
            <p className="font-medium text-2xl">Password</p>
            <span>Change your password</span>
            <div className="flex gap-5 mt-5">
              <div className="flex flex-col">
                <span>Password</span>
                <input type="password" className="settings-account-input" />
              </div>
              <div className="flex flex-col">
                <span>Confirm Password</span>
                <input type="password" className="settings-account-input" />
              </div>
            </div>
            <button className="settings-account-btn">Change</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsAccount;
