import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceLayout from "./components/ServiceLayout";
import Blogs from "./pages/Blogs";
import Viewblogs from "./components/Viewblogs";
/* Sub Pages Included Here */
import Webdevelopment from "./pages/sub-pages/Webdevelopment";
import GraphicsDesginer from "./pages/sub-pages/GraphicsDesginer";
/* Sub Pages Included Here */

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
        path: "/service/:name",
        element: (
            <Layouts>
                <ServiceLayout />
            </Layouts>
        )
    },
    {
        path: "/blogs",
        element: (
            <Layouts>
                <Blogs />
            </Layouts>
        )
    },
    {
        path: "/blogs/view/:blog-id",
        element: (
            <Layouts>
                <Viewblogs />
            </Layouts>
        )
    },
    {
        path: "/services/web-development",
        element: (
            <Layouts>
                <Webdevelopment />
            </Layouts>
        )
    },
    {
        path: "/services/graphics-desginer",
        element: (
            <Layouts>
                <GraphicsDesginer />
            </Layouts>
        )
    }
];

export default MyRoutes;
