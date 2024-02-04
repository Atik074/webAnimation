import "./TransitionWithJs.css";

const TransitionWithJs = () => {
  const name = "Programming Hero";
  const nameArr = name.split("");
  console.log(nameArr);
  return (
    <div className="mixed-main flex justify-center items-center">
      <div className="mixed-container">
        {nameArr.map((item ,i) => (
          <span className="alphabet"  style={{transitionDelay:`${i *100}ms`}}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default TransitionWithJs;
