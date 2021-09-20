import logo from './logo.svg';
import './App.css';


/* const myDetails = {
    name: 'Md Ridwan',
    job: 'Software Engi.',
    age: 18,
} 
const singerStyle ={
    backgroundColor: 'blue',
    color: 'white',
} */

function App() {
    const nayok =['Ridwan', 'Rahima', 'Rony', 'Jaman', 'Omar sani'];
    const cinemas = [
        {nayok: 'Koober', nayika: 'kopila'},
        {nayok: 'Rubel', nayika: 'Sabnoor'},
        {nayok: 'Omar sani', nayika: 'Moushumi'},
        {nayok: 'Ridwan', nayika: 'Raisa'},

    ]
    return ( 
      <div className="App">
          <ul>
              {
                  nayok.map(nayok => <li>{nayok}</li>)
              }
          </ul>
         {/*  <Cinema nayok="j" nayika="s"></Cinema> */}
          {
              cinemas.map(cinema =>  <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
          }
      </div>
    );
}
 /*  
    <Friends name="Ridwan" add="Narayanganj" phone="0164803576"></Friends>
    <Friends name="Rahima" add="Narayanganj" phone="01999999999"></Friends>
    <Friends name="Roni" add="Narayanganj" phone="08523848"></Friends>
    <Person name="Raisa" job="CEO"></Person>
    <Person name="Ridwan" job="Engineer"></Person>
    <Person name="kopila" job="Actor"></Person> */

function Friends(props){
    console.log(props)
    const person={
        backgroundColor: 'red',
        padding: '20px',
        color: 'white',
        margin: '20px',
        borderRadius: '20px'
    }
    return(
        <div style={person}>
            <h1>Name: {props.name}</h1>
            <h4>Address: {props.add}</h4>
            <h5>Phone: {props.phone}</h5>

        </div>
    )
};

function Cinema(props){

    return(
        <div className="person">
            <h2>Nayok: {props.nayok}</h2>
            <h4>Nayika: {props.nayika}</h4>

        </div>
    );
}

export default App;