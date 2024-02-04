import "./App.css";
import BoxAnimate from "./BoxAnimate/BoxAnimate";
import Button from "./Button/Button";
import ClipPathCss from "./ClipPathCss/ClipPathCss";
import LoadingAnimate from "./LoadingAnimate/LoadingAnimate";
import TransitionWithJs from "./TransitionWithJs/TransitionWithJs";

function App() {
  return (
    <div className="mx-6">
      <Button/>
      <BoxAnimate/>
      <LoadingAnimate/>
      <ClipPathCss/>
      <TransitionWithJs/>
    </div>
  );
}

export default App;
