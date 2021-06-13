import React, { useState } from "react";
import { DescriptionRow, LabelInput, LabelWrapper } from "./ProcessStagesStyle";
import { Button } from "antd";
import { UpdateDescription } from "../../../../firebase/DBmanage";

const ProcessDescription = ({ display, task, updateNames }) => {
  const detalle = task.detalle;
  const name = task.name;

  const [macroproceso, setMacroproceso] = useState(name.macroproceso);
  const [proceso, setProceso] = useState(name.proceso);

  const [respSeguimiento, setRespSeguimiento] = useState(
    detalle.respSeguimiento
  );
  const [keyUser, setKeyUser] = useState(detalle.keyUser);
  const [observaciones, setObservaciones] = useState(detalle.observaciones);

  const [loading, setLoading] = useState(false);

  const updateDescription = async () => {
    const descriptionObject = {
      detalle: {
        respSeguimiento,
        keyUser,
        observaciones,
      },
      name: {
        macroproceso,
        proceso,
      },
    };

    setLoading(true);
    await UpdateDescription(task.id, descriptionObject);

    updateNames(macroproceso, proceso);
    setLoading(false);
  };

  return (
    <DescriptionRow display={display}>
      <td colSpan="9">
        <div className="details">
          <LabelWrapper>
            <LabelInput>
              <p className="label">Macroproceso</p>
              <textarea
                cols="12"
                rows="1"
                value={macroproceso}
                onChange={(e) => setMacroproceso(e.target.value)}
              />
            </LabelInput>
            <LabelInput>
              <p className="label">Proceso</p>
              <textarea
                cols="12"
                rows="1"
                value={proceso}
                onChange={(e) => setProceso(e.target.value)}
              />
            </LabelInput>

            <LabelInput>
              <p className="label">Seguimiento</p>
              <textarea
                cols="12"
                rows="1"
                value={respSeguimiento}
                onChange={(e) => setRespSeguimiento(e.target.value)}
              />
            </LabelInput>
            <LabelInput>
              <p className="label">Key User</p>
              <textarea
                cols="12"
                rows="1"
                value={keyUser}
                onChange={(e) => setKeyUser(e.target.value)}
              />
            </LabelInput>
          </LabelWrapper>

          <textarea
            placeholder="Observaciones"
            rows="3"
            cols="40"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />

          <Button
            loading={loading}
            type="secondary"
            onClick={() => updateDescription()}
          >
            Actualizar
          </Button>
        </div>
      </td>
    </DescriptionRow>
  );
};

export default ProcessDescription;
