import { Alert } from 'react-native';
import { Client, Account, Avatars, Databases, Query } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.mary.android',
  projectId: '669ba815003817b98975',
  databaseId: '669ba95f0005d0cb6b51',
  userCollectionId: '669ba98f002b5f7a0b03',
  videoCollectionId: '669ba9ce001674edb540',
  storageId: '669bac91003c1577cb47',
}

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform)

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const newAccountId = Date.now().toString()
    const newDocumentId = Date.now().toString()

    const newAccount = await account.create(
      newAccountId,
      email,
      password,
      username,
    )

    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password)

    const user = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      newDocumentId,
      {
        accountId: newAccountId,
        email,
        username,
        avatar: avatarUrl,
      }
    )

    return user
  } catch (error) {
    console.error(error);
    // throw new Error('An unexpected error occurred')
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    await account.createEmailPasswordSession(email, password)
  } catch (error) {
    console.error(error);
    // throw new Error('An unexpected error occurred')
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw new Error("No current account");

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser.documents.length) throw new Error("No current user found");

    return currentUser.documents[0];
  } catch (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
};