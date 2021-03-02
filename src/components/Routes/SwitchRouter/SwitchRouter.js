import React from "react";
import { Switch, Route } from "react-router-dom";

//services and routes
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { useAuth } from "../../../services/authentication";

//pages
import SignIn from "../../../pages/SignIn/SignIn";
import Signup from "../../../pages/Signup/Signup";
import Home from "../../../pages/Home/Home";
import Jobs from "../../../pages/Jobs/Jobs";
import Profile from "../../../pages/Profile/Profile";
import EmailVerification from "../../../pages/EmailVerification/EmailVerification";
import CreateProfile from "../../../pages/CreateProfile/CreateProfile";
import AllCompanies from "../../../pages/AllCompanies/AllCompanies";

//components
import ProfileContactEdit from "../../../components/Company/ProfileContactCard/ProfileContactEdit";
import ProfileDescriptionEdit from "../../Company/ProfileDescriptionCard/ProfileDescriptionEdit";
import CreateJob from "../../Company/CreateJobCard/CreateJobForm";
import CompaniesInfoShow from "../../../components/CompaniesInfoShow/CompaniesInfoShow";
import ProfileBusinessEdit from "../../Company/ProfileBusinessCard/ProfileBusinessEdit";
import JobsInfoShow from "../../../components/JobsInfoShow/JobsInfoShow";
import VacancyCard from "../../../components/JobCard/VacancyCard";

function SwitchRouter() {
  const { user } = useAuth();

  return (
    <main
      style={{
        minHeight: "auto",
      }}
    >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/companies">
          <AllCompanies />
        </Route>
        <Route path="/companies/q/:search">
          <AllCompanies />
        </Route>
        <Route path="/email-verification">
          <EmailVerification />
        </Route>

        {/*ProfileCardsEdits*/}
        <Route path="/profile/profileContactCard/edit">
          <ProfileContactEdit />
        </Route>
        <Route path="/profile/profileDescriptionCard/edit">
          <ProfileDescriptionEdit />
        </Route>
        <Route path="/profile/profileBusinessCard/edit">
          <ProfileBusinessEdit />
        </Route>

        {/*CreateJob*/}
        <Route path="/profile/addJob">
          <CreateJob />
        </Route>
        <Route path="/profile/jobs">
          <VacancyCard />
        </Route>

        <Route path="/companies/:id">
          <CompaniesInfoShow />
        </Route>
        <Route path="/jobs/:id">
          <JobsInfoShow />
        </Route>
        {/* regular user */}
        <PrivateRoute auth={user} path="/profile/create">
          <CreateProfile />
        </PrivateRoute>

        <PrivateRoute auth={user} path="/profile/:id">
          {/* <div>{user && user.role}</div> */}
          <Profile />
        </PrivateRoute>

        {/* <PrivateRoute auth={user && user.emailVerified} path="/company/:id">
          <Company />
        </PrivateRoute> */}
      </Switch>
    </main>
  );
}
export default SwitchRouter;
