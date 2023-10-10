import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate
  } from "react-router-dom"
  
  import AllProducts from "../Components/Cards";
  import Products from "../Components/Products";
  
  const router = createBrowserRouter([

  {
  path: "/",
  element: <Main />,
  children: [

  {
  path: "/allproducts",
  element: <AllProducts />,
  },

  {
  path: "/allproducts/:id",
  element: <Products />,
  }
  
  ]}]);
  
  function Router() {
  return <RouterProvider router={router} />
  }
  
  function Main() {
  const navigate = useNavigate()
  
  return <div>
  
  <h1>Header</h1>
  <button onClick={() => navigate('/Cards')}>products</button>
  
  <Outlet />
  
  <h1>Footer</h1>
  
  </div>
  }
  
  export default Router;
