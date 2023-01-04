import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import UseCounterCounter from "./pages/UseCounterCounter"
import UseReducerCounter from "./pages/UseReducerCounter"
import ErrorBoundaryCounter from "./pages/ErrorBoundaryCounter"
import NotFound from './pages/NotFound'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Appp } from './styles/styles'
import { useThemeContext } from './components/Context'


function App() {

  const {theme} = useThemeContext()

  return (
    <Appp theme={theme}>

      <BrowserRouter>
      
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='counter1' element={<UseCounterCounter />} />
              <Route path='counter2' element={<UseReducerCounter />} />
              <Route path='errorBoundary' element={<ErrorBoundary><ErrorBoundaryCounter /></ErrorBoundary>} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
       

      </BrowserRouter>


    </Appp>
  );
}

export default App;
