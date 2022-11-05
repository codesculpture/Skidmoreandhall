// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/contact.tsx";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/Footer.tsx";
import * as $$1 from "./islands/Header.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/contact.tsx": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/Footer.tsx": $$0,
    "./islands/Header.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
