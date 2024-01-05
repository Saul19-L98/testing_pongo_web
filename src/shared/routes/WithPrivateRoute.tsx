import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import Spinner from "../Loading";

// You can extend this interface if you have specific auth props
interface IWithAuthProps {}

const WithPrivateRoute = <T extends IWithAuthProps>(
  WrappedComponent: NextPage<T>,
  verificationFunction: () => Promise<any>
) => {
  // This will be the component that WithPrivateRoute returns
  const WithAuth: NextPage<T> = (props: T) => {
    const router = useRouter(); // useRouter hook should be called inside the component
    const [isloading, setLoading] = useState(true);
    const isMounted = useRef(false);

    useEffect(() => {
      // Effect for handling the session check
      const checkSession = async () => {
        const isTokenValid = await verificationFunction();
        console.log(isTokenValid.data.isAuth);
        if (!isTokenValid.data.isAuth) {
          router.push("/"); // Redirect to login if no token
        } else {
          setLoading(false);
        }
      };
      if (!isMounted.current) {
        checkSession();
        isMounted.current = true;
      }
    }, [router]); // Depend on the router for this effect

    return isloading ? <Spinner /> : <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default WithPrivateRoute;
