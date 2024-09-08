import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import BlueScreenDeath from "./pages/death/BlueScreen.tsx";
import Skills from "./pages/skills/Skills.tsx";
import { Experience } from "./pages/experience/Experience.tsx";
import { ApolloProvider } from "@apollo/client";
import { GithubClient } from "./clients/Apollo.ts";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <BlueScreenDeath />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        {
          path: "portfolio",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "Projects",
          element: <Projects />,
        },
        {
          path: "Skills",
          element: <Skills />,
        },
        {
          path: "Experience",
          element: <Experience />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={GithubClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
