import React from "react";
import moment from "moment";
import "../App.css";

import { Card, Button } from "react-bootstrap";
const Weathercard = ({ date, temp, min, max }) => {
  return (
    // <div className='card'>
    //      <div>{moment(date).format("dddd ha")}</div>
    //      <h1>{temp}°C</h1>
    //      <div>
    //        {min}°C-{max}°C
    //      </div>
    //    </div>
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Text>{moment(date).format("dddd ha")}</Card.Text>
        <Card.Text>
          <h1>{temp}°C</h1>
        </Card.Text>
        <Card.Title>
          {min}°C-{max}°C
        </Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Weathercard;
