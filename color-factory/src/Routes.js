import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import Color from "./Color";
import ColorForm from "./ColorForm";
import Colors from "./Colors";
import useFields from "./hooks/useFields";

const Routes = () => {
  const [colors, setColors] = useState([
    { colorName: "cyan", colorValue: "rgb(0, 255, 255)" },
    { colorName: "magenta", colorValue: "rgb(255, 0, 255)" },
    { colorName: "yellow", colorValue: "rgb(255, 255, 0)" },
  ]);
  const [formData, handleChange] = useFields([
    {
      colorName: "",
      colorValue: "",
    },
  ]);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors([
      { colorName: formData.colorName, colorValue: formData.colorValue },
      ...colors,
    ]);
    history.push("/colors");
  };

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>

        <Route exact path="/colors/new">
          <ColorForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Route>

        <Route exact path="/colors/:color">
          <Color colors={colors} />
        </Route>

        <Redirect to="/colors" />
      </Switch>
    </div>
  );
};

export default Routes;
