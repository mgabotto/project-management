import React, { useState } from "react";
import { DescriptionRow } from "../../TableStyle";
import { Button } from "antd";
import { UpdateDescription } from "../../../../firebase/DBmanage";

const ProcessDescription = ({ display, task }) => {
  const res
  const detalle = task.detalle;

  const [respSeguimiento, setRespSeguimiento] = useState(
    detalle.respSeguimiento
  );
  const [keyUser, setKeyUser] = useState(detalle.keyUser);
  const [observaciones, setObservaciones] = useState(detalle.observaciones);

  const updateDescription = (value) => {
    UpdateDescription(task.id);
  };

  return (
    <DescriptionRow display={display}>
      <td colSpan="7">
        <div className="details">
          <div className="respContainer">
            <div className="responsable">
              <p className="label">Responsable de seguimiento</p>
              <textarea
                cols="12"
                rows="1"
                value={respSeguimiento}
                onChange={(value) => setRespSeguimiento(value)}
              />
            </div>
            <div className="responsable">
              <p className="label">Key User</p>
              <textarea
                cols="12"
                rows="1"
                value={keyUser}
                onChange={(value) => setKeyUser(value)}
              />
            </div>
          </div>
          <div className="description">
            <textarea
              placeholder="Observaciones"
              rows="3"
              cols="40"
              value={observaciones}
              onChange={(value) => setObservaciones(value)}
            />
          </div>
          <Button type="primary" onClick={() => updateDescription()}>
            Primary Button
          </Button>
        </div>
      </td>
    </DescriptionRow>
  );
};

export default ProcessDescription;
