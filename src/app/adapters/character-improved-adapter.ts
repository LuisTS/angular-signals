import { CharacterImproved } from "../models/characters-improved.model"

export const characterImprovedAdapter = (res: CharacterImproved) => ({ ...res, name: res.name });
