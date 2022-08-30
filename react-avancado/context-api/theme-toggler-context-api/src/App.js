import './App.css';
import { ThemeProvider } from './contexts/theme-context'
import { ThemeTogglerButton } from './components/theme-toggle-button'
import { Card } from './components/card'

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <Card />
    </ThemeProvider>
  );
}

export default App;
