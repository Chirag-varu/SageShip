// // src/lib/appwrite.ts
// import { Client, Account } from 'appwrite';

// const appwrite = new Client();

// appwrite
//   .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]') // Replace with your Appwrite endpoint
//   .setProject('[YOUR_PROJECT_ID]'); // Replace with your Appwrite project ID

// export const account = new Account(appwrite);

// // Example: Validate session token from client (if needed)
// export const getUserFromSession = async (sessionId: string) => {
//   try {
//     return await account.getSession(sessionId);
//   } catch (error) {
//     return null;
//   }
// };
