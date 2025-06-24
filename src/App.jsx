const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function MainGoal(){
  return(<p>hjksdh jdshfkjsdhf ksdjh dsjkh dskjhkh skdhkdsjh ksjfhksdjh</p>)
}
function Header(){
  return(
<header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcepts({title, description, image}){
  return(
    <li>title: {title}</li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <MainGoal />
      </main>
    </div>
  );
}

export default App;
