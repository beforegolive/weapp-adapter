import { noop } from "./util/index.js";

if (typeof URL !== "undefined" && typeof URL.revokeObjectURL !== "function") {
  URL.revokeObjectURL = noop;
}
