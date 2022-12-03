import { Box } from "./Box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      position:"absolute", 
      top:0,
      left:0,
      width:"100%",
    }}
  >
    {children}
  </Box>
);