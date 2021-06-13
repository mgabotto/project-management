import React, { useState, useEffect } from "react";
import Theme from "./GraphTheme";
import { ContainerGraph } from "./GraphsStyle";
import Pie from "./Graphs/Pie.js";
import { db } from "../../firebase/firebaseConfig";

const GraphPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tasks = [];
    db.collection("procesos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
          tasks.push({ ...doc.data(), id: doc.id })
        );
        setData(tasks);
        // console.log(tasks);
      });
  }, []);

  return (
    <ContainerGraph>
      <Pie data={data} theme={Theme} />
      <Pie data={data} theme={Theme} />
    </ContainerGraph>
  );
};

export default GraphPage;
