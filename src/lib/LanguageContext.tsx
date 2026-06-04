"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { t, type Lang } from "./i18n";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  tr: (typeof t)[Lang];
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggle, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LangCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
