import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Login from './Section/Login.jsx'
import HealthWorker from './Section/HealthWorker.jsx'
import ParentsDashboard from './Section/ParentsDashboard.jsx'
import PrivateRoutes from './Utilities/PrivateRoutes.jsx'
import RoleBaseRoutes from './Utilities/RoleBaseRoutes.jsx'
import HealthWorkerOverview from "./Components/HealthWorkerDashboard/HealthWorkerOverview.jsx"
import List from './Components/Parent/List.jsx'
import Add from './Components/Parent/Add.jsx'
import View from './Components/Parent/View.jsx'
import Edit from './Components/Parent/Edit.jsx'
import AddVital from './Components/Vital/Add.jsx'
import ViewVital from './Components/Vital/View.jsx'
import EditVital from "./Components/Vital/Edit.jsx"
import Summary from './Components/ParentDashboard/Summary.jsx'
import VaccinationList from './Components/Vaccinations/List.jsx'
import AddVaccination from './Components/Vaccinations/AddVaccination.jsx'
import Setting from './Components/ParentDashboard/Setting.jsx'
import TableVaccination from './Components/Vaccinations/TableVaccination.jsx'
import DetailsVaccination from './Components/Vaccinations/DetailsVaccination.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/healthWorker-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/healthWorker-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["healthWorker"]}>
              <HealthWorker />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>
          <Route index element={<HealthWorkerOverview />}></Route>

          <Route path="/healthWorker-dashboard/parents" element={<List />}></Route>
          <Route path="/healthWorker-dashboard/add-parent" element={<Add />}></Route>
          <Route path="/healthWorker-dashboard/parents/:id" element={<View />}></Route>
          <Route path="/healthWorker-dashboard/parents/edit/:id" element={<Edit />}></Route>
          <Route path="/healthWorker-dashboard/parents/vital/:id" element={<ViewVital />}></Route>
          <Route path="/healthWorker-dashboard/parents/vital/edit/:id" element={<EditVital />} />

          <Route path="/healthWorker-dashboard/parents/vaccinations/:id" element={<VaccinationList />}></Route>

          <Route path="/healthWorker-dashboard/vital/add" element={<AddVital />}></Route>
          <Route path="/healthWorker-dashboard/setting" element={<Setting />}></Route>

          <Route path="/healthWorker-dashboard/vaccinations" element={<TableVaccination />}></Route>
          <Route path="/healthWorker-dashboard/add-vaccination" element={<AddVaccination />}></Route>
          <Route path="/healthWorker-dashboard/vaccinations/:id" element={<DetailsVaccination />}></Route>
          
          

        </Route>


        <Route path="/parent-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["healthWorker", "parent"]}>
              <ParentsDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>

          <Route index element={<Summary />}></Route>

          <Route path="/parent-dashboard/profile/:id" element={<View />}></Route>
          <Route path="/parent-dashboard/vaccinations/:id" element={<VaccinationList />}></Route>
          <Route path="/parent-dashboard/add-vaccination" element={<AddVaccination />}></Route>
          <Route path="/parent-dashboard/vital/:id" element={<ViewVital />}></Route>
          <Route path="/parent-dashboard/setting" element={<Setting />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App