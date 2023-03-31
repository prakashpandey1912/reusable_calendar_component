import "./styles.css";
import Calender from "./components/calender";

export default function App() {
  return (
    <div className="App">
      <Calender date={new Date("12/19/2000")} />
    </div>
  );
}
