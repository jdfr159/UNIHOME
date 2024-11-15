import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarusuarioComponent } from './agregarusuario/agregarusuario.component';
import { VenderinmueblesComponent } from './venderinmuebles/venderinmuebles.component';
import { LoginComponent } from './login/login.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';

export const routes: Routes = [
    {path: 'agregarusuario', title: 'Registrar', component: AgregarusuarioComponent},
    {path: 'home', title: 'inicio', component: HomeComponent, children:[
        {path: 'venderinmueble', title: 'venderinmueble', component: VenderinmueblesComponent},
        {path: 'propiedades', title: 'Propiedades', component: PropiedadesComponent}
    ]},
    {path: 'login', title: 'iniciar sesion', component: LoginComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
];
