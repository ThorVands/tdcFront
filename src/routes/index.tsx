import { Routes, Route, Navigate } from "react-router";
import { Login } from '../pages/Hub/Login'
import { MainLayout } from "@/layouts/MainLayout";
import { Dashboard } from "@/pages/Hub/Dashboard";
import { Hospedagem } from "@/pages/Hub/Hospedagem";
import { Reservas } from "@/pages/Hub/Reservas";
import { Pets } from "@/pages/Hub/Pets";
import { Servicos } from "@/pages/Hub/Servicos";
import { Financeiro } from "@/pages/Hub/Financeiro";
import { PetDetails } from "@/pages/Hub/PetDetails";
import { ClientLogin } from "@/pages/Client/ClientLogin";

export function AppRoutes() {
  return (
    <Routes>
        <Route path='login' element={<ClientLogin/>}></Route>


        {/* Rota principal do painel administrativo */}
        <Route path='admin/login' element={<Login/>}/>
        <Route path='hub' element={<MainLayout/>}>
          <Route path='' element={<Navigate to='dashboard'></Navigate>}></Route>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path='hospedagem' element={<Hospedagem/>}></Route>
          <Route path='reservas' element={<Reservas/>}></Route>
          <Route path='pets' element={<Pets/>}>
            <Route path=':id' element={<PetDetails/>}></Route>
          </Route>
          <Route path='servicos' element={<Servicos/>}></Route>
          <Route path='financeiro' element={<Financeiro/>}></Route>
          <Route path='settings' element={<Dashboard/>}></Route>
        </Route>
    </Routes>
  )
}

