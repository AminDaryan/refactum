import { Stack } from "@mui/material";
import Aside from "./components/Aside";
import Main from "./components/Main";

export default function Home () {
  return (
    <Stack
      direction="row"
      useFlexGap
      sx={{
        height: "100vh",
        width: "100wh"
      }}
    >
      <Aside />
      <Main />
    </Stack>
  );
}
