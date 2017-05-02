import { Model } from "../../shared/models/model";

export interface Color extends Model {
    name: string;
    hex: string;
}
