import Header from './component/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='btn btn-primary'>Hello React</h1>
      <h2>Bangladesh</h2>
      <Header></Header>
     <Person></Person>
     <Person name="Rifat Biswas" job="Student 1"></Person>
     <Person name="Rajebul Biswas" job="Student 2"></Person>
     <Person name="Rifat Ahamed" job="Student 3"></Person>
      
    </div>
  );
}


function Person(props){
  return(
    <div style={{color:'blue',}}>
      {/* <h1>Mashrafi Mourtuza</h1> */}
      <h1>{props.name}</h1>
      <h2>Proffession: {props.job}</h2>
    </div>
  )
}

export default App;
