import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [count, setCount] = useState(0);

  const [isToggle, setIsToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Začátek fetch data");
      const res = await fetch("https://api.golemio.cz/v2/gtfs/routes?limit=30", {
        method: "GET", 
        headers:{
          "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1ZGVyYS5rYS4yMDE5QHNrb2xhLnNzcHMuY3oiLCJpZCI6MTA1MCwibmFtZSI6bnVsbCwic3VybmFtZSI6bnVsbCwiaWF0IjoxNjQyNDMxMDY1LCJleHAiOjExNjQyNDMxMDY1LCJpc3MiOiJnb2xlbWlvIiwianRpIjoiNTUxZWM1MmYtNTM5OS00NTM4LTkzM2ItYTAzODk0YmQ0OTQ5In0.XbEvucB18GAxX2Br39bV4MiaHIllucdO-0GQ-tAGXOY"
        }
      });
      console.log("Po zavolání na API");
      const data = await res.json();
      console.log(data);
      setData(data);
      setLoading(false);
    };

    console.log("Start use effect");

    console.log("Před zavoláním fetchData");
    fetchData();
    console.log("Po zavolání fetchData");

    const text = "ahoj jaké byly vánoce";
  }, []);

  return (
    <div className="App">
      <h1>data</h1>
      <data title={'post.title'} body={}/>
      {/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1ZGVyYS5rYS4yMDE5QHNrb2xhLnNzcHMuY3oiLCJpZCI6MTA1MCwibmFtZSI6bnVsbCwic3VybmFtZSI6bnVsbCwiaWF0IjoxNjQyNDMxMDY1LCJleHAiOjExNjQyNDMxMDY1LCJpc3MiOiJnb2xlbWlvIiwianRpIjoiNTUxZWM1MmYtNTM5OS00NTM4LTkzM2ItYTAzODk0YmQ0OTQ5In0.XbEvucB18GAxX2Br39bV4MiaHIllucdO-0GQ-tAGXOY */}
    </div>
  );
}

export default App;
