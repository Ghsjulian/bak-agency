import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceLayout from "./components/ServiceLayout";
import Blogs from "./pages/Blogs";
import Viewblogs from "./components/Viewblogs";
import OurTeam from "./components/OurTeam";

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
        path: "/our-team",
        element: (
            <Layouts>
            <OurTeam/>
            </Layouts>
        )
    }
];

export default MyRoutes;
