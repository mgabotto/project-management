import React from "react";
import { VictoryPie } from "victory";
import Theme from "./Theme";
import { ContainerGraph } from "./GraphsStyle";

const Graphs = () => {
  return (
    <ContainerGraph>
      <VictoryPie
        theme={Theme}
        name="series-1"
        data={[
          { x: "Cats", y: 35 },
          { x: "Dogs", y: 40 },
          { x: "Birds", y: 55 },
        ]}
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
    </ContainerGraph>
  );
};

export default Graphs;
