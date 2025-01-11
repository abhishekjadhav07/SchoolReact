import CardSlider from "./CardSlider";
import img1 from "../images/Plantation1.jpeg";
import img2 from "../images/Plantation2.jpeg";
import img3 from "../images/PlantationMain.jpeg";
import SocialSlider from "./SocialSlider";

const cards = [
  {
    title: "Tree Plantation",
    image: img1,
  },
  {
    title: "Tree Plantation",
    image: img2,
  },
  {
    title: "Tree Plantation",
    image: img3,
  },

  // Add more cards as needed
];

function App() {
  return (
    <div>
      <div className="content">
        <h1>Social Activities</h1>
        <SocialSlider cards={cards} />
      </div>
    </div>
  );
}

export default App;
