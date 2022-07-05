// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //LOGIN
  API_SIGN_IN_URL: 'http://localhost:8080/unaito/v1/users/sign-in',
  API_FORGETPASSWORD_URL: 'http://localhost:8080/unaito/v1/users/forgot-password/email/',
  API_LOGOUT_URL:'http://localhost:8080/unaito/v1/users/logout/',

  //User Management User Create
  API_REGISTER_URL: 'http://localhost:8080/unaito/v1/users/create',
  
  API_USERDELETE_URL: 'http://localhost:8080/unaito/v1/users/delete/',
 
  API_GETALLUSERS_URL:'http://localhost:8080/unaito/v1/users/all-users',
  API_USEREDIT_URL: 'http://localhost:8080/unaito/v1/users/edit',
  API_GETUSERBYID_URL: 'http://localhost:8080/unaito/v1/users/get-user/',

  //Team OnBoarding
  // API_GET_TEAM_MEMBERS: 'http://localhost:3000/addTeamMebers',
  // API_UPDATE_ONE_TEAM_MEMBERS: 'http://localhost:3000/addTeamMebers/',
  API_ADD_TEAM_MEMBERS: 'http://localhost:8080/unaito/v1/projects/',
  // API_DELETE_TEAM_MEMBERS: 'http://localhost:3000/addTeamMebers/',

  //Add Drivers  /unaito/v1/projects/{project-id}/add-scope
  API_ADD_DRIVERS_URL:'http://localhost:8080/unaito/v1/projects/',
  API_SCOPE_DRIVERS_URL:'http://localhost:8080/unaito/v1/projects/',

  //Create New Customers
  API_CREATE_NEWCUSTOMER: 'http://localhost:8080/unaito/v1/customers/create',

  //Create New Project
  API_CREATE_NEWPROJECT: 'http://localhost:8080/unaito/v1/projects/create',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
