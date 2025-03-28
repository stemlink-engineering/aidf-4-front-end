import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isLoaded && !isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  console.log(user);

  return <Outlet />;
};

export default ProtectedLayout;
