import { RouterModule, Routes } from "@angular/router";

import { ColorListComponent } from "./components/color-list.component";
import { ColorFormComponent } from "./components/color-form.component";

const routes: Routes = [
    { path: "", component: ColorListComponent },
    { path: "color-form", component: ColorFormComponent },
];

export const colorToolRouterModule = RouterModule.forChild(routes);
