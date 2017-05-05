import { InjectionToken, OpaqueToken } from "@angular/core";

interface ProductId {
    id: string;
}

export const PRODUCTS = new InjectionToken<any[]>("PRODUCTS");
