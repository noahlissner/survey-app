import { useState } from "react";
import HomeTitle from "../components/HomeTitle";
import SettingsNavLink from "../components/SettingsNavLink";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState("General");

  const handleClick = (e: any) => {
    setCurrentPage(e.target.innerText);
  };

  return (
    <div className="h-full p-[100px]">
      <HomeTitle title="Settings" />
      <section>
        <ul className="flex flex-col gap-5 mt-8">
          <SettingsNavLink
            title="General"
            onClick={handleClick}
            active={currentPage}
          />
          <SettingsNavLink
            title="Displays"
            onClick={handleClick}
            active={currentPage}
          />
          <SettingsNavLink
            title="Colors"
            onClick={handleClick}
            active={currentPage}
          />
          <SettingsNavLink
            title="Tags"
            onClick={handleClick}
            active={currentPage}
          />
          <SettingsNavLink
            title="API"
            onClick={handleClick}
            active={currentPage}
          />
        </ul>
      </section>
    </div>
  );
};

export default Settings;
