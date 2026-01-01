import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./componants/UI/Header";
import HomePage from "./pages/home";
import Categories from "./pages/categories";
import UsersPage from "./pages/users";
import RevealPage from "./pages/revealPage";

type User = {
  id: string;
  name: string;
};

type Categorie = {
  cat_en: string;
  cat_ar: string;
};

const App: React.FC = () => {
  // Set viewport height for ios devices
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

    setVH();
    window.addEventListener("resize", watchVHChanges);
    window.addEventListener("orientationchange", watchVHChanges);

    function onLoad() {
      const localStorageUsers = window.localStorage.getItem("users");
      if (localStorageUsers) {
        setUsers(JSON.parse(localStorageUsers));
      }
    }

    onLoad();

    return () => {
      window.removeEventListener("resize", watchVHChanges);
      window.removeEventListener("orientationchange", watchVHChanges);
    };
  }, []);

  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [users, setUsers] = useState<User[]>([]);
  const [selectedCategorie, setselectedCategorie] = useState<Categorie>({
    cat_en: "",
    cat_ar: "",
  });

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
          element: <HomePage lang={lang} />,
        },
        {
          path: "/categories",
          element: (
            <Categories lang={lang} setCategorie={setselectedCategorie} />
          ),
        },
        {
          path: "/users",
          element: <UsersPage lang={lang} users={users} setUsers={setUsers} />,
        },
      ],
    },
    {
      path: "/RevealPage",
      element: (
        <RevealPage
          lang={lang}
          users={users}
          selectedCategory={selectedCategorie}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
