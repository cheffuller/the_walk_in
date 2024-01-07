import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {

  const { component: Component, ...rest } = props;

  return (
    checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
  );
};

export default ProtectedRoute;