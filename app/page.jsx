import Nav from './components/Nav';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

import './globals.css'

export default function Home() {
  return (
    <main>
      
      <div className='container'>
        <Nav />
        <Header />
        <Cards />
        <Footer />
      </div> 
    </main>
  );
}
