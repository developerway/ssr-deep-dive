import { useCallback, useEffect, useState } from "react";

export const usePath = (initialPath?: string) => {
  const pathname =
    typeof window !== "undefined"
      ? window.location.pathname
      : (initialPath ?? "/");
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return path;
};

export const useNavigate = () => {
  const navigate = useCallback((newPath: string) => {
    window.history.pushState({}, "", newPath);
    const popStateEvent = new PopStateEvent("popstate", { state: {} });
    dispatchEvent(popStateEvent);
  }, []);

  return navigate;
};
