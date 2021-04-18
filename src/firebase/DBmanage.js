import { db } from "./firebaseConfig";

// FUNCIONES FIREBASE

export const NewTask = () => {
  db.collection("procesos")
    .doc()
    .set({
      id: 3,
      name: {
        macroproceso: "Macroproceso2",
        proceso: "Proceso",
      },
      stages: {
        recInformacion: "en curso",
        modelado: "finalizado",
        atrProcesos: "Pendiente",
        atrTareas: "Pendiente",
        fad: "Pendiente",
        keyUser: "En curso",
        coordProcesos: "En curso",
        validacionEdison: "Pendiente",
        statusGeneral: "En curso",
      },
      detalle: {
        respSeguimiento: "Laura",
        keyUser: "Pablo",
        observaciones: "Detalles del proceso",
      },
    });
};

export const GetTasks = () => {
  db.collection("procesos")
    .get()
    .then((querySnapshot) => {
      let tasks = [];
      querySnapshot.forEach((doc) => tasks.push(doc.data()));
      this.setData(tasks);
    });
};
