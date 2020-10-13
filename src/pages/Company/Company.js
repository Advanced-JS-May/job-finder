import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getEventById } from "../services/event";



export default function Company() {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getEventById(id).then((e) => {
      setEvent(e);
    });
  }, [id]);

  return (
    <section style={{ margin: 20 }}>
      {/* <h2>{event.title}</h2>
      <p>{event.description}</p> */}
    </section>
  );
}