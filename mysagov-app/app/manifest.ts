import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "mySAGOV Digital Wallet",
    short_name: "mySAGOV",
    description: "Access your government licences and vehicle registrations",
    start_url: "/",
    display: "standalone",
    background_color: "#4a5c6a",
    theme_color: "#4a5c6a",
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["government", "utilities", "productivity"],
    lang: "en-AU",
    dir: "ltr",
  }
}
