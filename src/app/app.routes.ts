import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.routes').then(m => m.HOME_ROUTES)
    },
    {
        path: 'weather',
        loadChildren: () => import('./pages/pages.routes').then(m => m.PAGES_ROUTES)
    },
];
