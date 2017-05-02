import { Injectable } from "@angular/core";

import { Model } from "../models/model";

@Injectable()
export abstract class ModelsService<T extends Model> {

    protected models: T[] = [];

    constructor(initialModels: T[]) {
        this.models = initialModels;
    }

    public getAll() {
        return this.models;
    }

    public getById(modelId: number) {
        return this.models.find((model: T) => model.id === modelId);
    }

    public append(newModel: T) {
        newModel.id = this.models.reduce( (maxId: number, nextModel: T) =>
            Math.max(maxId, nextModel.id), 0) + 1;
        this.models = this.models.concat(newModel);
    }

    public delete(modelId: number) {
        const modelIndex = this.models.findIndex((model: T) => model.id === modelId);
        this.models = [ ...this.models.slice(0, modelIndex), ...this.models.slice(modelIndex + 1) ];
    }

}
