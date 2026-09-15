import { useState, useEffect } from "react";


const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemax="100"
        aria-valuemin="0"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};
export default ProgressBar;
