export default {
  siteConfigs: [
    {
      siteData: {
        siteName: "google",
        forwardingUrl: "https://google.com",
        blockedOs: ["iPhone"],
        blockedBrowser: ["Chrome"],
        blockedDevice: ["iPhone"],
        blockedOSVersion: ["15.1"],
        blockedLocations: [""],
        blockedIPs: ["0.0.0.0", "8.8.8.8"],
      },
    },
    {
      siteData: {
        siteName: "github",
        forwardingUrl: "https://google.com",
        blockedOs: ["Mac"],
        blockedBrowser: ["Chrome"],
        blockedDevice: ["iPhone"],
        blockedOSVersion: ["15.1"],
        blockedLocations: [""],
        blockedIPs: ["0.0.0.0", "8.8.8.8"],
      },
    },
  ],
};
