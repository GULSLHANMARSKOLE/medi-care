const isLocalHost = (hostname) =>
  ["localhost", "127.0.0.1", "::1"].includes(hostname);

const getAuthCookieOptions = (req) => {
  let crossSite = process.env.NODE_ENV === "production";
  const origin = req.get("origin");

  if (origin) {
    const originHost = new URL(origin).hostname;
    const apiHost = req.hostname;
    const sameHost =
      originHost === apiHost ||
      (isLocalHost(originHost) && isLocalHost(apiHost));

    crossSite = !sameHost;
  }

  return {
    httpOnly: true,
    secure: crossSite,
    sameSite: crossSite ? "none" : "lax",
  };
};

module.exports = getAuthCookieOptions;
