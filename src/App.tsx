import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./componants/UI/Header";
import Home from "./pages/home";
import Categories from "./pages/categories";
import UsersPage from "./pages/users";
import RevealPage from "./pages/revealPage";

const App: React.FC = () => {
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
          element: <UsersPage lang={lang} />,
        },
      ],
    },
    {
      path: "/RevealPage",
      element: <RevealPage winner="kirols" />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
