import React from "react";

const Interests = ({ data, setData, errors }) => {
  const { interest } = data;
  const handleChange = (e, name) => {
    setData((prevData) => ({
      ...prevData,
      interest: e.target.checked
        ? [...prevData.interest, e.target.name]
        : prevData.interest.filter((i) => i != e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            onChange={handleChange}
            checked={interest.includes("coding")}
            type="checkbox"
            name="coding"
          />
          coding
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={handleChange}
            checked={interest.includes("study")}
            type="checkbox"
            name="study"
          />
          study
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={handleChange}
            checked={interest.includes("music")}
            type="checkbox"
            name="music"
          />
          music
        </label>
      </div>
        {errors.interest && <span>{errors.interest}</span>}

    </div>
  );
};

export default Interests;
