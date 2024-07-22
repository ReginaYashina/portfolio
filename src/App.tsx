import './App.css';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
