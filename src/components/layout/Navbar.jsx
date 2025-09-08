import React, { useEffect, useLayoutEffect, useRef } from "react";
import "../layout/Navbar.css"; 

export default function Navbar({ activeTab, onTabChange }) {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const listRef = useRef(null);

  const measureSelected = () => {
    const container = listRef.current;
    if (!container) return;


    const selected = container.querySelector(
      'button[role="tab"][aria-selected="true"]'
    );
    if (!selected) return;

    const cRect = container.getBoundingClientRect();
    const sRect = selected.getBoundingClientRect();

    const x = sRect.left - cRect.left + container.scrollLeft;
    const w = sRect.width;

    container.style.setProperty("--underline-x", `${x}px`);
    container.style.setProperty("--underline-w", `${w}px`);
  };

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(measureSelected);
    return () => cancelAnimationFrame(raf);
  }, [activeTab]);

  useEffect(() => {
    measureSelected();

    const onResize = () => measureSelected();
    window.addEventListener("resize", onResize);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measureSelected).catch(() => {});
    }

    let ro;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(() => measureSelected());
      if (listRef.current) ro.observe(listRef.current);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro && listRef.current) ro.disconnect();
    };
  }, []);

  const onKeyDown = (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    e.preventDefault();
    const idx = tabs.findIndex((t) => t.id === activeTab);
    const nextIdx =
      e.key === "ArrowRight"
        ? (idx + 1) % tabs.length
        : (idx - 1 + tabs.length) % tabs.length;
    onTabChange(tabs[nextIdx].id);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">JR</div>

        <div
          className="tabs"
          role="tablist"
          aria-label="Primary"
          onKeyDown={onKeyDown}
          ref={listRef}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              className="tab-btn"
              aria-selected={activeTab === t.id}
              tabIndex={activeTab === t.id ? 0 : -1}
              onClick={() => onTabChange(t.id)}
            >
              {t.label}
            </button>
          ))}

          {/* Underline reads CSS vars set by measureSelected() */}
          <span className="tab-underline" aria-hidden="true" />
        </div>

        <div className="nav-spacer" />
      </div>
    </nav>
  );
}
