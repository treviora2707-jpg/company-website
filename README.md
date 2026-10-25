# TREVIORA Industry Website

## Local development

From the project folder, install the locked dependencies and start Vite:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

To verify a production build:

```sh
npm run build
npm run preview
```

## Animations

The site uses the installed GSAP, ScrollTrigger, and `@gsap/react` packages. The home hero animates on entry and includes a timed, controllable image slideshow. Content reveals and team/service image zooms are ScrollTrigger-driven. Animations are scoped to the active React component and cleaned up when routes change. The slideshow and GSAP effects respect the operating system's reduced-motion preference.

No separate test runner is configured; use `npm run build` to check the production bundle and open the local site in a browser to verify interactions and scroll behavior.
