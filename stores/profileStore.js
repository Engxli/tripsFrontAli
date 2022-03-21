import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "./instance";

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }
  profiles = [];

  fetchProfile = async () => {
    try {
      const response = await instance.get("/api/profile");
      this.profiles = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateProfile = async (profileId, newProfile, image1) => {
    try {
      console.log("dsjhdksjhdjshjk");
      const profile = await instance.put(
        `/api/profile/${profileId}/edit`,
        newProfile
      );
      console.log(profile);
      await this.fetchProfile();
    } catch (error) {}
  };
}

const profileStore = new ProfileStore();
profileStore.fetchProfile();

export default profileStore;
