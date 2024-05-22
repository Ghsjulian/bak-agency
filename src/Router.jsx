import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
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
        element: (
            <Layouts>
                <Contact />
            </Layouts>
        )
    }
];

export default MyRoutes;
