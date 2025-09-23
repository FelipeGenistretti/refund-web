import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRouter";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";
import { AuthProvider } from "../contexts/AuthContext";



export function Routes() {
    const { session, isLoading } = useAuth()
    function Route() {
        switch (session?.user.role) {
            case "employee":
                return <EmployeeRoutes />;
            case "manager":
                return <ManagerRoutes />;
            default:
                return <AuthRoutes />;
        }
    }

    if(isLoading){
        return <Loading/>
    }

    return (
        <AuthProvider>
            <BrowserRouter>
                <Route />
            </BrowserRouter>
        </AuthProvider>
    );
}
