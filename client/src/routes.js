import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import StudentRegistration from "./pages/StudentRegistration/Index";
import PrimaryRouteLayout from "./layouts/PrimaryRouteLayout";
import Admin from "./pages/Admin/admin";
import CompanyRegister from "./pages/Company/Register";
import EmailPage from "./pages/Company/EmailPage";
import FindCompany from "./pages/Company/FindCompany";
import CreateCompany from "./pages/Company/CreateCompany";
import Role from "./pages/register/Role";
import Profile from "./pages/user/profile";
import Guide from "./pages/GuideLine/Guideline";

import Dashboard from "./pages/Challenge/Dashboard";
import Test from "./pages/Challenge/Challenges";
import Dash from "./components/Company/Dashboard/Dash";
import Create from "./pages/Challenge/Create";
import Main from "./pages/Challenge/Main";
import StudentDashboard from "./pages/StudentDashboard/Dashboard";
import Popup from "./pages/StudentMoreDetails/Pop";
import Challenges from "./pages/StudentDashboard/Challenges/Challenges";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import Attempt from "./pages/Test/Test";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PrimaryRouteLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/register/organization" element={<CompanyRegister />} />
      <Route path="/register/organization/verify" element={<EmailPage />} />
      <Route path="/Find/:uniqueId" element={<FindCompany />} />
      <Route path="/register" element={<StudentRegistration />} />
      <Route path="/register/success" element={<Popup />} />
      <Route path="/create/company" element={<CreateCompany />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/create/company/role" element={<Role />} />
      <Route path="/guidelines" element={<Guide />} />
      <Route path="/challenge" element={<PreviewPage />} />
      <Route path="/challenge/attempt" element={<Attempt />} />
      <Route path="/student/dashboard" element={<StudentDashboard />}>
        <Route index element={<Dash />} />
        <Route path="challenge" element={<Challenges />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Test />} />
        <Route path="Challenges" element={<Test />} />
        <Route path="create/challenge" element={<Main />} />
      </Route>{" "}
      <Route path="/create/challenge" element={<Main />} />
      <Route path="/create/company/role/:Role" element={<Profile />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </>
  )
);
export default router;
