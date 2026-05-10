import type { SanitizedRepo } from "./types";

export function waitForElement(id: string, timeout = 5000): Promise<HTMLElement> {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const check = () => {
      const el = document.getElementById(id);
      if (el) return resolve(el);

      if (Date.now() - start > timeout) {
        return reject(`Snapport: container "${id}" não encontrado`);
      }

      requestAnimationFrame(check);
    };

    check();
  });
}

export function safeTopics(p: SanitizedRepo): string[] {
  return Array.isArray(p.topics) ? p.topics : [];
}