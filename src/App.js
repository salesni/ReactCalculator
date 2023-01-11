import CalculatorBox from './components/CalculatorBox';
import CalculatorProvider from './context/CalculatorProvider';
import Notes from './components/Notes';

function App() {
  return (
    <CalculatorProvider>
      <CalculatorBox/>
      <Notes/>
    </CalculatorProvider>
  );
}

export default App;
