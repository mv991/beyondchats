import { createTheme, PaletteMode } from "@mui/material";
import React, { useState } from "react";
import theme, { getDesignTokens } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
