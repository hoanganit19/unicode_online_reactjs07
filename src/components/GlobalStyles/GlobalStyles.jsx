import { useEffect } from "react";
import "./GlobalStyles.scss";
export default function GlobalStyles({ children, color }) {
  useEffect(() => {
    const css = `
        .content {
            background: ${color};
        }
    `;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.append(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [color]);
  return children;
}
