import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRouter";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { Loading } from "../components/Loading";

const isLoading = false;

const session = {
    user: {
        role: "manager",
    },
};

export function Routes() {
    function renderRoutes() {
        switch (session.user.role) {
            case "employee":
                return <EmployeeRoutes />;
            case "manager":
                return <ManagerRoutes />;
            default:
                return <AuthRoutes />;
        }
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <BrowserRouter>
            {renderRoutes()}
        </BrowserRouter>
    );
}
