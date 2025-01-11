import { whySchool } from "../constants";

const WhySchool = () => {
  return (
    <div className="content">
      <h1>Why BFEMS?</h1>
      <div className="reasons">
        {whySchool.map((reason) => (
          <div className="reason" key={reason.id}>
            <div className="icon">{reason.icon}</div>
            <h2 style={{ color: "black" }}>{reason.title}</h2>
            <p>{reason.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySchool;
