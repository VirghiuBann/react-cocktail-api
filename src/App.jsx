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
        path: '/about',
        element: <About />,
      },
      {
        index: true,
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
