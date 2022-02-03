import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventsComp from "../EventsComp";
import Topstyles from "./seperateEvent.module.css";
export default function SeperateEvent(props) {
  const [Event, setEvent] = useState([]);
  let { id } = useParams();

/*   useEffect(() => {
    async function fetchData(){
    await axios
      .post("http://localhost:3001/api/SeperateEvent", { EID: id })
      .then((response) => {
        console.log(response.data);
        setEvent(response.data[0]);
        console.log(response.data[0]);
      });
  }fetchData()}, []); */
  return (
    <div>
      {/* <h1>{Event.ETitle}</h1> */}
      <div className={Topstyles.titleEng}>
        {" "}
        <p className={Topstyles.date}>Date: {props.date}</p>
        <h1 className={Topstyles.title}>{props.title}</h1>
        <p>{props.text2}</p>
      </div>
      <EventsComp img={props.img} />
    </div>
  );
}
