const port = process.env.APP_PORT || 3000;

const apiBasePath = "/api/auth/";
const websiteBasePath = "/auth"

const appName = process.env.NEXT_PUBLIC_SUPER_TOKENS_APP_NAME || 'sample app'
export const websiteDomain = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${port}`;

export const appInfo = {
  appName,
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath,
  websiteBasePath
};
