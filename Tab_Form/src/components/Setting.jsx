import React from "react";

const Setting = ({ data, setData }) => {
  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, theme: e.target.name }));
  };
  const { theme } = data;
  return (
    <div>
      <div>
        <label>
          <input
            onChange={handleChange}
            checked={theme === "dark"}
            type="radio"
            name="dark"
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={handleChange}
            checked={theme === "light"}
            type="radio"
            name="light"
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Setting;
