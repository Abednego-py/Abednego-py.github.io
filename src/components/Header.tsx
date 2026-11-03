import { useEffect, useState } from "react";
import { nav } from "../data";
import { Link, useLocation } from "react-router-dom";

type Theme = "light" | "dark";

export default function Header() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const getDestination = (href: string) =>
    isHome && href.startsWith("/#") ? href.slice(1) : href;

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => {
    const current: Theme =
      theme ??
      (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <header>
      <div className="wrap">
        <Link className="brand" to={getDestination("/#top")}>
          Abednego Aginam
        </Link>
        <nav>
          {nav.map(
            ([label, href]) => (
              isHome ? (
                <a key={href} href={getDestination(href)}>
                  {label}
                </a>
              ) : (
                <Link key={href} to={getDestination(href)}>
                  {label}
                </Link>
              )
            ),
          )}
          <button
            id="th"
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            ◐ Theme
          </button>
        </nav>
      </div>
    </header>
  );
}
