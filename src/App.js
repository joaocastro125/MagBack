
import Navigation from './components/Navegation';
import Hero from './components/Hero';
import Card from './components/creditCard'
import CardList from './components/cardList'
import Button from './components/centerButton'

import posts from './data/Posts'




import './App.css';





  
    function App() {
      return (
        <div className="App">
          <Navigation />
           <Hero />
           <Card />
           <CardList posts={posts} />
           <Button>
             Abra sua conta
           </Button>


        </div>
      );
    }
    

export default App;
