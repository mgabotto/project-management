import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryLegend } from "victory";
import { GraphContainer } from "../GraphsStyle";

const Pie = ({ theme, data }) => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    const enCurso = data.filter((process) => {
      return process.stages.statusGeneral === "En curso";
    }).length;

    const pendiente = data.filter((process) => {
      return process.stages.statusGeneral === "pendiente";
    }).length;

    const finalizado = data.filter((process) => {
      return process.stages.statusGeneral === "finalizado";
    }).length;

    const total = enCurso + pendiente + finalizado;

    const enCursoPercentage = ((enCurso / total) * 100).toFixed(0) + "%";
    const pendienteercentage = ((pendiente / total) * 100).toFixed(0) + "%";
    const finalizadoPercentage = ((finalizado / total) * 100).toFixed(0) + "%";

    setInput([
      {
        x: "En curso",
        y: enCursoPercentage,
      },
      {
        x: "Pendiente",
        y: pendienteercentage,
      },
      {
        x: "Finalizado",
        y: finalizadoPercentage,
      },
    ]);
  }, [data]);

  return (
    <GraphContainer>
      <VictoryPie
        theme={theme}
        name="series-1"
        data={input}
        labels={({ datum }) => `${datum.y}`}
        height={180}
        animate={{
          duration: 2000,
        }}
        innerRadius={25}
        events={[
          {
            target: "data",
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: "data",
                    mutation: ({ style }) => {
                      return style.fill === "#c43a31"
                        ? null
                        : { style: { fill: "#c43a31" } };
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
      <VictoryLegend
        x={125}
        y={10}
        orientation="horizontal"
        gutter={20}
        style={{ border: { stroke: "black" } }}
        // colorScale={["navy", "blue", "cyan"]}
        data={[
          { name: "En curso" },
          { name: "Pendiente" },
          { name: "Finalizado" },
        ]}
        theme={theme}
      />
    </GraphContainer>
  );
};

export default Pie;
