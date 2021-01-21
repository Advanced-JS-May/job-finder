import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { useAuth } from "../../../services/authentication";

import SignIn from "../../../pages/SignIn/SignIn";
import Signup from "../../../pages/Signup/Signup";
import Home from "../../../pages/Home/Home";
import Jobs from "../../../pages/Jobs/Jobs";
import Company from "../../../pages/Company/Company";
import EmailVerification from "../../../pages/EmailVerification/EmailVerification";
import CreateProfile from "../../../pages/CreateProfile/CreateProfile";
import AllCompanies from "../../../pages/AllCompanies/AllCompanies";
import ProfileContactEdit from "../../../components/Company/ProfileContactCard/ProfileContactEdit";
import ProfileDescriptionEdit from "../../Company/ProfileDescriptionCard/ProdileDescriptionEdit";
import CreateJob from "../../Company/CreateJob/CreateJob";
import CompaniesInfoShow from "../../../components/CompaniesInfoShow/CompaniesInfoShow";
<<<<<<< HEAD
import ProfileBusinessInfoEdit from "../../../components/Company/ProfileBusinessCard/ProfileBusinessInfoEdit";
=======
import ProfileBusinessInfoEdit from "../../../components/Company/ProfileBusinessCard/ProfileBusinessInfoEdit"
import JobsInfoShow from "../../../components/JobsInfoShow/JobsInfoShow";
>>>>>>> 57a1d8af6aeb8af936f4bd5a0d84aca76c29aa9f

function SwitchRouter() {
  const { user } = useAuth();

  return (
    <main
      style={{
        minHeight: "70vh",
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
          <ProfileBusinessInfoEdit />
        </Route>

        {/*CreateJob*/}
        <Route path="/profile/addJob">
          <CreateJob />
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
          <div>{user && user.role}</div>
          <Company />
        </PrivateRoute>

        <PrivateRoute auth={user && user.emailVerified} path="/company/:id">
          <Company />
        </PrivateRoute>
      </Switch>
    </main>
  );
}
export default SwitchRouter;
