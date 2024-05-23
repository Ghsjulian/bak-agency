import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import About from "./pages/About"
import Services from "./pages/Services"
import Staffs from "./pages/Staffs"

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
                <About />
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
    },
    {
        path: "/service",
        element: (
            <Layouts>
                <Services />
            </Layouts>
        )
    },
    {
        path: "/staff",
        element: (
            <Layouts>
                <Staffs />
            </Layouts>
        )
    }
];

export default MyRoutes;
