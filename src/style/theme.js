const size = {
  mobile: "480px",
  tablet: "600px",
  desktop: "1024px",
};

const theme = {
  mainColor: "#ffffff",
  mobile: `@media (max-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  desktop: `@media (min-width: ${size.desktop})`,
};
export default theme;
