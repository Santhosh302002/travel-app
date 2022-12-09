import logo from './logo.svg';
import './index.css';
import IndexPage from "./components/Indexpage"
import Info from'./components/Info'
import data from './data';
import './App.css';

function App() {
  const card =data.map(item=> {
    //  console.log(item)
     return(
      <Info img={item.img}
      place={item.place}
      view={item.view}
      location={item.location}
      info={item.information} />
     )
  })
  
  return (
    
    <section className='page-one'>
      <IndexPage/>
         {card}
         
    </section>
  );
  
  }


export default App;

// const card =data.map(item=> {
    // console.log(item)

    