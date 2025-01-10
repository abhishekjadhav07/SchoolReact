import CardSlider from "./CardSlider";
import event1 from "../images/event1.jpeg";
import event2 from "../images/event11.jpeg";

import event3 from "../images/event3.jpeg";
import event4 from "../images/event4.jpeg";

const cards = [
  {
    title: "Science Exihibition 2024",
    image: event2,
  },
  {
    title: "Science Exihibition 2024",
    image: event3,
  },
  {
    title: "Science Exihibition 2024",
    image: event4,
  },

  // Add more cards as needed
];

function App() {
  return (
    <div>
      <div className="content">
        <h1>Events & Highlights</h1>
        <CardSlider cards={cards} />
      </div>
    </div>
  );
}

export default App;
