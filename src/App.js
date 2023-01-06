import {ColorModeContext, useMode } from './theme';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidepanel from './scenes/global/Sidepanel';
import Dashboard from "./scenes/dashboard";
import Employees from "./scenes/employees";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

/*








 */


function App() {
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
    <Sidepanel />

      <main className="content">

        
        <Topbar />
        <Routes>
          <Route path="/dashboard/home" element={<Dashboard />} />
          
           <Route path="/dashboard/employees" element={<Employees />} />
           <Route path="/dashboard/contacts" element={<Contacts />} />
           <Route path="/dashboard/invoices" element={<Invoices />} />
           <Route path="/dashboard/form" element={<Form />} />
           <Route path="/dashboard/calendar" element={<Calendar />} />
           <Route path="/dashboard/faq" element={<FAQ />} />
           <Route path="/dashboard/bar" element={<Bar />} />
           <Route path="/dashboard/pie" element={<Pie />} />
           <Route path="/dashboard/line" element={<Line />} />
           <Route path="/dashboard/geography" element={<Geography />} />
{/*
          






 

          <Route path="/line" element={<Line />} /> */}
        </Routes>
        </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
