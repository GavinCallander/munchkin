// all our wonderful components
import { Footer, Header, UserInterface } from './components';
// building for mobile, if making responsive, will switch to SASS for ease
// let's use the default for now
import './App.css';

export const App = () => (
  <div className="app">
    <Header />
    <UserInterface />
    <Footer />
  </div>
);