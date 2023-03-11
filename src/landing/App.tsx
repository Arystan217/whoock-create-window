import HeaderPage from './pages/Header/HeaderPage';
import HomePage from './pages/Home/HomePage';
import { useRef } from 'react';

function App() {
    const home = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const stages = useRef<HTMLDivElement>(null);
    const partners = useRef<HTMLDivElement>(null);
    const contacts = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <HeaderPage home={home} about={about} stages={stages} partners={partners} contacts={contacts}/>
      <HomePage home={home}/>
    </div>
  );
}

export default App;
