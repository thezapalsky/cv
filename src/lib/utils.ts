import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setDevelopmentFavicon() {
  if (typeof window === 'undefined') return;
  
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = "https://img.icons8.com/windows/32/dev.png";
    }
    else {
      console.error("Favicon not found");
    }
  }
}
