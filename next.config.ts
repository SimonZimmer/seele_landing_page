import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverRuntimeConfig: {
    BREVO_SIGNUP_API_TOKEN: process.env.BREVO_SIGNUP_API_TOKEN,
    BREVO_LIST_ID: process.env.BREVO_LIST_ID,
  },
};

export default nextConfig;
