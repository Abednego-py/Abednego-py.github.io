import { useEffect, useState } from "react";
import { nav } from "../data";
import { Link, useLocation } from "react-router-dom";

type Theme = "light" | "dark";

export default function Header() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  const toggle = () => {
    const current: Theme =
      theme ??
      (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <header>
      <div className="wrap">
        <Link className="brand" to="/#top">
          Abednego Aginam
        </Link>
        <nav>
          {nav.map(([label, href]) => (
            <Link key={href} to={href}>
              {label}
            </Link>
          ))}
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
