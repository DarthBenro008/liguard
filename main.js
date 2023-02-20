import { default as config } from "./conifgurations";
import UAParser from "./parser";

export function onClientReqeust(req, res) {
  let headers = response.getHeaders();
  let ua = headers["User-Agent"];
  let parser = new UAParser(ua);
  let results = parser.getResult();
  config.siteConfigs.forEach((config) => {
    if (
      results.browser == config.siteData.blockedBrowser ||
      results.device == config.siteData.blockedDevice ||
      results.os == config.siteData.blockedOs ||
      headers["location"][0] == config.siteData.blockedLocations
    ) {
      req.respondWith(
        200,
        {},
        {
          status: false,
          data: "unauthorized",
          message:
            "The user does not have requested authorization to access this resource",
        }
      );
    }
  });
}
