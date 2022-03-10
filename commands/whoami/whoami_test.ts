import { assert } from "../../deps_dev.ts";

import { user } from "./whoami.ts";

Deno.test("[Get user]", () => {
  assert(typeof user() === "string");
});
