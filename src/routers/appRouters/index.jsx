import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Loading from "../../components/base/loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Loading><Home /></Loading>
    }
])

export default router;