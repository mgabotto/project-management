import { db } from "./firebaseConfig";

// FUNCIONES FIREBASE

export const NewTask = () => {
  let newID = Date.now();

  db.collection("procesos")
    .doc()
    .set({
      id: newID,
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
  let tasks = [];
  db.collection("procesos")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => tasks.push(doc.data()));
    });
  return tasks;
};

export const DeleteTask = (id) => {
  if (window.confirm("Está seguro que quiere eliminar el proceso?")) {
    db.collection("procesos").doc(id).delete();
  }
};
