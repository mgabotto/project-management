import React, { useState } from "react";
import { DescriptionRow } from "../../TableStyle";
import { Button } from "antd";
import { UpdateDescription } from "../../../../firebase/DBmanage";

const ProcessDescription = ({ display, task }) => {
  const detalle = task.detalle;

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
    };

    setLoading(true);
    await UpdateDescription(task.id, descriptionObject);

    setLoading(false);
  };

  return (
    <DescriptionRow display={display}>
      <td colSpan="8">
        <div className="details">
          <div className="respContainer">
            <div className="responsable">
              <p className="label">Responsable de seguimiento</p>
              <textarea
                cols="12"
                rows="1"
                value={respSeguimiento}
                onChange={(e) => setRespSeguimiento(e.target.value)}
              />
            </div>
            <div className="responsable">
              <p className="label">Key User</p>
              <textarea
                cols="12"
                rows="1"
                value={keyUser}
                onChange={(e) => setKeyUser(e.target.value)}
              />
            </div>
          </div>
          <div className="description">
            <textarea
              placeholder="Observaciones"
              rows="3"
              cols="40"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            />
          </div>
          <Button
            loading={loading}
            type="primary"
            onClick={() => updateDescription()}
          >
            Primary Button
          </Button>
        </div>
      </td>
    </DescriptionRow>
  );
};

export default ProcessDescription;
