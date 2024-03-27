import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  HomeLayout,
  Landing,
  Error,
  NewsLetter,
  Cocktail,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/landing',
        element: <Landing />,
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
