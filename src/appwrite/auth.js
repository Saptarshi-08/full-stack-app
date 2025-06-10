import conf from "../conf/conf";
import { Client, Account } from "appwrite";

export class AuthService {
  client = new Client();

  constructor() {
    this.setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAcc({ email, password, name }) {
    try {
      const userAcc = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAcc) {
        return this.login({ email, password });
      } else {
        return userAcc;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser() :: ", error);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout() :: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
