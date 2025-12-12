//Điều khiển
import Navigo from "navigo";
import { home } from "./pages/home";
import { explo } from "./pages/explo";
import { playlist } from "./pages/playlist";
export const router = new Navigo("/");
router.on("/", home);
router.on("/kham-pha", explo);
router.on("/playlist/detail/:slug", playlist);
router.resolve();
