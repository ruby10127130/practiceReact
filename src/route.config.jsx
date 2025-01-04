import { useRoutes } from 'react-router';
// import Layout from './components/Layout'
import Home from './pages/Home';
import Week01 from './pages/mainTasks/week01';

const routes = [
  {
    path: "/",
    // element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mainTasks/week_01", element: <Week01 />},
    ]
  },
]

const RouteConf = () => {
  const routeConfig = useRoutes(routes)
  return routeConfig
}

export default RouteConf