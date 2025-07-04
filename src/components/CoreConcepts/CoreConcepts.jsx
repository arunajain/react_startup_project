import "./CoreConcepts.css";
import "../../data.js";

export default function CoreConcepts({title, description, image}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}