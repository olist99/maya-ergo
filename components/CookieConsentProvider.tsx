"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ConsentValue = "accepted" | "declined" | null;

type ConsentContextValue = {
  consent: ConsentValue;
  setConsent: (value: ConsentValue) => void;
};

const STORAGE_KEY = "cookie-consent";

const CookieConsentContext = createContext<ConsentContextValue>({
  consent: null,
  setConsent: () => {},
});

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentValue>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsentState(stored);
    }
  }, []);

  function setConsent(value: ConsentValue) {
    setConsentState(value);
    if (value) {
      window.localStorage.setItem(STORAGE_KEY, value);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
