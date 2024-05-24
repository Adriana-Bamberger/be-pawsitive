import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from '../components/App'
import MoarCats from '../components/MoarCats'
import Cats from '../components/Cats'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Cats />} />
      <Route path="/moarcats" element={<MoarCats />} />
    </Route>,
  ),
)
