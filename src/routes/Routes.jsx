import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

export const ROUTES = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/portfolio",
        element: <Portfolio />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
];