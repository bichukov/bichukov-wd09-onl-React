import Menu from "./components/menu/menu";
import Title from "./components/title/title";
import Tabs from "./components/Tabs/Tabs";
import './App.scss';



function App() {

  const user = {
      firstName : 'Serg',
      lastName : 'bert',
  };
  const title = ('Blog');
  return (
    <div className="App ">
<Menu user={user} />
        <div className='mane'>
        <Title title={title}/>
        <Tabs/>
    </div>
    </div>

  );
}

export default App;
