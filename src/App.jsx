import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  HomeLayout,
  Landing,
  Error,
  NewsLetter,
  Cocktail,
} from './pages'
import { loader } from './pages/Landing'
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
        loader: loader,
        errorElement: <SinglePageError />,
      },
      {
        path: '/newsletter',
        element: <NewsLetter />,
      },
      {
        path: '/cocktail',
        element: <Cocktail />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
