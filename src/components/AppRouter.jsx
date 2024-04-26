import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { routes } from "../router/Routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route => 
        <Route key={route.path} path={route.path} element={route.element} exact={route.exact}/>
      )}
      <Route path="/" element={<Posts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
