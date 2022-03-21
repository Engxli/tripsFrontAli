import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "./instance";

class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];

  fetchTrip = async () => {
    try {
      console.log("hi");
      const response = await instance.get("/api/trip");
      this.trips = response.data;
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  createTrip = async (userID, newData) => {
    try {
      console.log(newData);

      const newTrip = await instance.post(`/api/user/${userID}/trip`, newData);
      await this.fetchTrip();
    } catch (error) {
      console.log(error);
    }
  };

  //   editCart = async (trip) => {
  //     try {
  //       const foundProduct = this.items.find(
  //         (item) => (item.trip._id = trip._id)
  //       );
  //       if (foundProduct) {
  //       }
  //       const jsonItems = JSON.stringify(this.items);
  //       await AsyncStorage.setItem("Trip", jsonItems);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   removeItemFromTrip = async (trip) => {
  //     try {
  //       const foundTrip = this.items.find((item) => item.trip._id === trip._id);
  //       if (foundTrip) {
  //         this.items = this.items.filter(
  //           (item) => item.trip._id !== foundTrip.trip._id
  //         );
  //       }
  //       const jsonItems = JSON.stringify(this.items);
  //       await AsyncStorage.setItem("Trip", jsonItems);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
}

const tripStore = new TripStore();
tripStore.fetchTrip();

export default tripStore;
