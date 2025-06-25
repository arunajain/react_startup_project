import { useState } from "react";
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from "./components/TabButton/TabButton.jsx";
function MainGoal(){
  return(<p>Learning React Fundamental Concepts in details</p>)
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');
  function handleClick(topic){
    console.log("button clicked");
    setSelectedTopic(topic);
  }
  console.log("App Component reloaded");
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts title="Components" description="The core UI building blocks" image={componentsImg} />
          <CoreConcepts 
          title={CORE_CONCEPTS[1].title} 
          description={CORE_CONCEPTS[1].description} 
          image={CORE_CONCEPTS[1].image}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
        <MainGoal />
        </section>
        <section id="examples">
          <h2>React Core Concepts</h2>
          <menu>
          <TabButton onSelect={() => {handleClick('components')}}>Components</TabButton>
          <TabButton onSelect={() => {handleClick('jsx')}}>JSX</TabButton>
          <TabButton onSelect={() => {handleClick('props')}}>Props</TabButton>
          <TabButton onSelect={() => {handleClick('state')}}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>
              {EXAMPLES[selectedTopic].code}</code></pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
