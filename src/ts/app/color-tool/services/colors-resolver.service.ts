import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Color} from "../models/color";
import { ColorsService } from "./colors.service";

@Injectable()
export class ColorsResolverService implements Resolve<Color[]> {

    constructor(private colorsSvc: ColorsService) { }

    public resolve(activateRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Promise<Color[]> {
        return this.colorsSvc.getAll().toPromise();
    }

}
