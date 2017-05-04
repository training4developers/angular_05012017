import { RouterModule, Routes } from "@angular/router";

import { CarTableComponent } from "./components/car-table.component";
import { CarFormComponent } from "./components/car-form.component";

const routes: Routes = [
    { path: "", component: CarTableComponent },
    { path: "car-form", component: CarFormComponent },
];

export const carToolRouterModule = RouterModule.forChild(routes);
