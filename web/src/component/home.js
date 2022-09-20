import React, { useState } from "react";
import axios from "axios";

import "../App.css";
import Weathercard from "./weathercard";
import { Button, Form } from "react-bootstrap";
const Home = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);
  let submitHandler = async (e) => {
    e.preventDefault();
    console.log("I am submit handler function");
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`
      );

      console.log("response", response);
      setData(response.data.list);
    } catch (error) {
      console.log("error in api call:", error);
    }
  };
  return (
    <div>
      <h1>Weather App Home</h1>
      <form className="forms" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            required
            placeholder="enter your city"
            onChange={(e) => {
              // console.log(e.target.value);
              setCityName(e.target.value);
            }}
          />
        </Form.Group>
        {/* <input
          type="text"
          required
          placeholder="enter your city"
          onChange={(e) => {
            // console.log(e.target.value);
          // setCityName(e.target.value);
          }}
        /> */}
        <Button type="submit"> Get Wheather</Button>
      </form>
      <div className="weath">
        {
          // data.map((eachForcast, index) => (
          //   <div key={index}>
          //     <div>{eachForcast.dt_txt}</div>
          //     <div>{eachForcast.main.temp}</div>
          //     <div>
          //       {eachForcast.main.temp_min}-{eachForcast.main.temp_max}
          //     </div>
          //   </div>
          // ))
          data.map((eachForcast, index) => (
            <Weathercard
              key={index}
              date={eachForcast.dt_txt}
              temp={eachForcast.main.temp}
              min={eachForcast.main.temp_min}
              max={eachForcast.main.temp_max}
            />
          ))
        }
      </div>
    </div>
  );
};
export default Home;
