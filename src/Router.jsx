import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";

const MyRoutes = [
    {
        path: "/",
        index: true,
        element: (
            <Layouts>
                <Home />
            </Layouts>
        )
    },
    {
        path: "/about",
        element: (
            <Layouts>
                <Home />
            </Layouts>
        )
    },
    {
        path: "/contact",
        element: <Home />
    }
];

export default MyRoutes;
