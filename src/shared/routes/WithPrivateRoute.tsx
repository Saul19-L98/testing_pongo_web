import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { verifySession } from "@/request/verify-session";

// You can extend this interface if you have specific auth props
interface IWithAuthProps {}

const WithPrivateRoute = <T extends IWithAuthProps>(
  WrappedComponent: NextPage<T>
) => {
  // This will be the component that WithPrivateRoute returns
  const WithAuth: NextPage<T> = (props: T) => {
    const router = useRouter(); // useRouter hook should be called inside the component

    const checkSession = async () => {
      const isTokenValid = await verifySession();
      if (!isTokenValid) {
        router.push("/login"); // Redirect to login if no token
      }
      return <WrappedComponent {...props} />;
    };

    //TODO: fix this
    // useEffect(() => {
    //   // Effect for handling the session check
    // }, [router]); // Depend on the router for this effect

    // Render the WrappedComponent only if there's a token
    // You can also handle a loading state here if needed
    return checkSession();
  };

  return WithAuth;
};

export default WithPrivateRoute;
