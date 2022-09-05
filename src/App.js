import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';


function App() {
  return (
    <Box>
      <Router>
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
        </Router>
    </Box>
  );
}

export default App;
