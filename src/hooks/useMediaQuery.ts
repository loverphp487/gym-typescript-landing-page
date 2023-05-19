import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let Listener = () => setMatches(media.matches);
    window.addEventListener("resize", Listener);
    return () => window.addEventListener("remove", Listener);
  }, [query, matches]);

  return matches;
};

export default useMediaQuery;
