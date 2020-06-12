import { Country } from "./country"
import { Deserializable } from "../shared/deserializable"
import { GlobalData } from './global';

export class CountryList {
    Global : GlobalData
    countryList : Array<Country>;
}