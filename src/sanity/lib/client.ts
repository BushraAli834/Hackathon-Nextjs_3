import { createClient } from 'next-sanity';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Ensure required environment variables are present
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
  throw new Error('Missing required environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN');
}

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'avasnuuo', // Fallback to default project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',   // Fallback to 'production'
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-13', // Fallback to specific API version
  useCdn: false, // Disable CDN for authenticated requests
  token: process.env.SANITY_API_TOKEN || 'sksODsqAAeA7RyFnM47axHetnslG5eXyU8Z9z0cLKFcO6rRwn2Cx8F0bFUtRRiWBwew3URTefj8NxB5xycYgbimjKQkC43RRT33IPhDF6nInN072rLitrnhJhGe7E0YxrmGSzQyyQQz73pbhBIxPXZhx3skiOWAC8CCwdnD6a9gSx3qbfdPm', // Token from environment variables
});
