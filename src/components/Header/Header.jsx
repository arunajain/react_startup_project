import "./Header.css";
import reactImg from '../../assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']; //variables declaration and using it directly in component with curly braces


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
  const description = reactDescriptions[genRandomInt(2)]; //its much cleaner this way
  return(
<header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}