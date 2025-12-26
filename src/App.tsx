import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./componants/UI/Header";
import Home from "./pages/home";
import Categories from "./pages/categories";
import UsersPage from "./pages/users";
import RevealPage from "./pages/revealPage";

const App: React.FC = () => {
  useEffect(() => {
    function setVH(): void {
      window.requestAnimationFrame(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    }

    let lastHeight: number = window.innerHeight;
    let vhCheckTimer: number | null = null;

    function watchVHChanges(): void {
      if (vhCheckTimer !== null) {
        clearTimeout(vhCheckTimer);
      }
      vhCheckTimer = window.setTimeout(() => {
        if (window.innerHeight !== lastHeight) {
          lastHeight = window.innerHeight;
          setVH();
        }
      }, 150);
    }

    // Initialize and add listeners
    setVH();
    window.addEventListener("resize", watchVHChanges);
    window.addEventListener("orientationchange", watchVHChanges);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", watchVHChanges);
      window.removeEventListener("orientationchange", watchVHChanges);
    };
  }, []);

  const [winner, setWinner] = useState<string>("None");
  const [lang, setLang] = useState("ar");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header lang={lang} setLang={setLang} />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home lang={lang} />,
        },
        {
          path: "/categories",
          element: <Categories lang={lang} />,
        },
        {
          path: "/users",
          element: <UsersPage lang={lang} setWinner={setWinner} />,
        },
      ],
    },
    {
      path: "/RevealPage",
      element: <RevealPage winner={winner} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
