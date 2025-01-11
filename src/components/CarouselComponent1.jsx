import event1 from "../videos/video1.mp4";
import event2 from "../videos/2.mp4";
import event3 from "../videos/3.mp4";

import CardSlider1 from "./CardSlider1";

const cards1 = [
  {
    title: "",
    video: event3,
  },
  {
    title: "Science Exhibition 2024",
    video: event1,
  },
  {
    title: "School Video",
    video: event2,
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
