import "./App.css";
import BoxAnimate from "./BoxAnimate/BoxAnimate";
import Button from "./Button/Button";
import ClipPathCss from "./ClipPathCss/ClipPathCss";
import LoadingAnimate from "./LoadingAnimate/LoadingAnimate";

function App() {
  return (
    <div className="mx-6">
      <Button/>
      <BoxAnimate/>
      <LoadingAnimate/>
      <ClipPathCss/>
    </div>
  );
}

export default App;
