function assertEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Set this in .env.local for local dev or in your Vercel project settings.`
    );
  }
  return value;
}

export const projectId = assertEnv(
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

// "production" is Sanity's conventional default dataset name.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
