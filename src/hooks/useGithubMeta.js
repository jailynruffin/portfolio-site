import { useEffect, useState } from "react";

const cache = { data: null, ts: 0 };

export default function useGithubMeta() {
  const [meta, setMeta] = useState(cache.data);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (cache.data && Date.now() - cache.ts < 3600_000) {
        setMeta(cache.data);
        return;
      }
      try {
        const res = await fetch("/github-meta.json", { cache: "no-cache" });
        if (!res.ok) return;
        const json = await res.json();
        cache.data = json; cache.ts = Date.now();
        if (!cancelled) setMeta(json);
      } catch {
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return meta || {};
}
