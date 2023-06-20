import AppInsurrance from "./components/AppInsurrance"
import { ContributeProvider } from "./context/ContributeProvider";

function App() {
 
  return (
    <ContributeProvider>
      <AppInsurrance />
    </ContributeProvider>
  )
}

export default App
