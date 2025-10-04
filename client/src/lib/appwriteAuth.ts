// // src/lib/appwriteAuth.ts
// import { Client, Account } from 'appwrite';

// const appwrite = new Client();

// appwrite
//   .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]') // Replace with your Appwrite endpoint
//   .setProject('[YOUR_PROJECT_ID]'); // Replace with your Appwrite project ID

// export const account = new Account(appwrite);

// export const signUp = (email: string, password: string, name?: string) => {
//   return account.create('unique()', email, password, name);
// };

// export const login = (email: string, password: string) => {
//   return account.createSession(email, password);
// };

// export const getCurrentUser = () => {
//   return account.get();
// };

// export const logout = () => {
//   return account.deleteSession('current');
// };
