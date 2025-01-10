import event1 from "../videos/video1.mp4";
import CardSlider1 from "./CardSlider1";

const cards1 = [
  {
    title: "School Video",
    video: event1,
  },
  {
    title: "School Video",
    video: event1,
  },
  {
    title: "School Video",
    video: event1,
  },
];

function App1() {
  return (
    <div>
      <div className="content">
        <h1>Explore Our School Through Videos</h1>
        <CardSlider1 cards={cards1} />
      </div>
    </div>
  );
}

export default App1;
