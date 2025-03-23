import { CharacterResponse } from "../models/characters.model"

export const characterAdapter = (res: CharacterResponse) => ({ ...res.results, count: res.info.count });
