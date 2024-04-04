import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  HomeLayout,
  Landing,
  Error,
  NewsLetter,
  Cocktail,
} from './pages'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import SinglePageError from './pages/SinglePageError'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: '/newsletter',
        element: <NewsLetter />,
      },
      {
        path: '/cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
