import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs";

import { Model } from "../models/model";

@Injectable()
export abstract class ModelsService<T extends Model> {

    protected models: T[] = [];
    protected headers = new Headers({ "Content-Type": "application/json" });
    protected requestOptions = new RequestOptions({
        headers: this.headers,
    });

    constructor(
        private http: Http,
        private baseURL: string,
    ) { }

    public getAll() {
        return this.http.get(this.baseURL).map((res) => res.json());
    }

    public getById(modelId: number) {
        return this.http
            .get(this.getElementURI(modelId))
            .map((res) => res.json());
    }

    public append(newModel: T) {
        return this.http
            .post(this.baseURL, JSON.stringify(newModel), this.requestOptions)
            .map((res) => res.json());
    }

    public replace(newModel: T) {
        return this.http
            .put(this.getElementURI(newModel.id), JSON.stringify(newModel), this.requestOptions)
            .map((res) => res.json());
    }

    public delete(modelId: number) {
        return this.http
            .delete(this.getElementURI(modelId))
            .map((res) => res.json());
    }

    private getElementURI(modelId: string | number) {
        return `${this.baseURL}/${encodeURIComponent(String(modelId))}`;
    }

}
