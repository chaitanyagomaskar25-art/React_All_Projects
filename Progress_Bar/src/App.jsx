import "./App.css";
import ProgressBar from "./component/Progressbar";

const App = () => {
  const bars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <div>
      <h1>Progress Bar</h1>
      {bars.map((b) => (
        <ProgressBar progress={b} />
      ))}
    </div>
  );
};

export default App;
