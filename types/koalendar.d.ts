export {};

declare global {
  interface Window {
    Koalendar?: (...args: unknown[]) => void;
  }
}
