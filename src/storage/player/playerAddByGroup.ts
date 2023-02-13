import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const players = await AsyncStorage.getItem(`${PLAYER_COLLECTION}:${group}`);

    const playersList = players ? JSON.parse(players) : [];

    const newPlayersList = [...playersList, newPlayer];

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(newPlayersList));
  } catch (error) {
    throw (error);
  }
}