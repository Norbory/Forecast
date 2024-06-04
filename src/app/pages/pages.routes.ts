import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LWXComponent } from "./LWX/lwx.component";
import { TOPComponent } from "./TOP/top.component";

export const PAGES_ROUTES: Routes = [
    {path: '', component: LayoutComponent},
    {path: 'LWX', component: LWXComponent},
    {path: 'TOP', component: TOPComponent},
];