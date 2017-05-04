import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
];

export const appRouterModule = RouterModule.forRoot(routes);
