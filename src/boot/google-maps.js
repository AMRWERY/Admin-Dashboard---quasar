import { boot } from "quasar/wrappers";
import VueGoogleMaps from "@fawmi/vue-google-maps";

export default boot(({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAiRRnFBxdVlLkvx7b1RqPRxWkRD6zx0Wg",
      language: "en",
    },
  });
});
