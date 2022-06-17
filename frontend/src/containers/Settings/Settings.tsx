import { useState } from "react";
import HomeTitle from "../../components/HomeTitle";
import SettingsNavLink from "../../components/SettingsNavLink";
import SettingsAccount from "./SettingsAccount";
import SettingsAPI from "./SettingsAPI";
import SettingsColors from "./SettingsColors";
import SettingsGeneral from "./SettingsGeneral";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState("General");

  const handleClick = (e: any) => {
    setCurrentPage(e.target.innerText);
  };

  return (
    <div className="h-full flex flex-col lg:flex-row p-[50px] xl:p-[100px] xl:pt-[50px]">
      <section>
        <HomeTitle title="Settings" />
        <div className="mb-10 lg:mb-0">
          <ul className="flex flex-row justify-between lg:flex-col gap-5 mt-8">
            <SettingsNavLink
              title="General"
              onClick={handleClick}
              active={currentPage}
            />
            <SettingsNavLink
              title="Account"
              onClick={handleClick}
              active={currentPage}
            />
            <SettingsNavLink
              title="Colors"
              onClick={handleClick}
              active={currentPage}
            />
            <SettingsNavLink
              title="API"
              onClick={handleClick}
              active={currentPage}
            />
          </ul>
        </div>
      </section>
      <main className="flex justify-center w-full">
        {currentPage === "General" && <SettingsGeneral />}
        {currentPage === "Account" && <SettingsAccount />}
        {currentPage === "Colors" && <SettingsColors />}
        {currentPage === "API" && <SettingsAPI />}
      </main>
    </div>
  );
};

export default Settings;
