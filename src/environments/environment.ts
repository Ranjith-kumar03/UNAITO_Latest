// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_SIGN_IN_URL: 'http://localhost:8080/unaito/v1/users/sign-in',
  API_FORGETPASSWORD_URL: 'http://localhost:8080/unaito/v1/users/forgot-password/email/',
  API_REGISTER_URL: 'http://localhost:8080/unaito/v1/users/create',
  
  API_USERDELETE_URL: 'http://localhost:8080/unaito/v1/users/delete/',
 
  API_GETALLUSERS_URL:'http://localhost:8080/unaito/v1/users/all-users',
  API_USEREDIT_URL: 'http://localhost:8080/unaito/v1/users/edit',
  API_GETUSERBYID_URL: 'http://localhost:8080/unaito/v1/users/get-user/',

  API_GET_TEAM_MEMBERS: 'http://localhost:3000/addTeamMebers',
  API_UPDATE_ONE_TEAM_MEMBERS: 'http://localhost:3000/addTeamMebers/',
  API_ADD_TEAM_MEMBERS: 'http://localhost:3000/addTeamMebers/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
