import "./App.css";
import BoxAnimate from "./BoxAnimate/BoxAnimate";
import Button from "./Button/Button";
import LoadingAnimate from "./LoadingAnimate/LoadingAnimate";

function App() {
  return (
    <div className="mx-6">
      <Button/>
      <BoxAnimate/>
      <LoadingAnimate/>
    </div>
  );
}

export default App;
