import './App.css';
import { Navbar, Footer } from './components';
import { LanguageProvider } from './Context/LanguageContext';
import { About, Contact, Header, Projects } from './containers';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navbar />
          <Header />
          <About />
          <Projects />
          <Contact /> 
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
