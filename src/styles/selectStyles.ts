import { StylesConfig, ThemeConfig } from "react-select";

export const selectStyle: StylesConfig = {
  placeholder: (provided) => ({
    ...provided,
    color: "#adacac",
    fontSize: "12px",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    fontSize: "12px",
    padding: "8px",
    color: isSelected ? "white" : "black",
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    fontSize: "14px",
    borderRadius: "8px",
    boxShadow: "none",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
  }),
};

export const selectTheme: ThemeConfig = (theme) => ({
  ...theme,
  borderRadius: 0,
  boxShadow: "none",
  colors: {
    ...theme.colors,
    primary: "#1E1850",
    primary25: "rgba(30, 24, 80, 0.4)",
  },
});
