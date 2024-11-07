import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

import { StyledAppWrapper } from "./style";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <StyledAppWrapper>
        <Header />
        <Dashboard />
      </StyledAppWrapper>
    </DndProvider>
  );
}

export default App;
