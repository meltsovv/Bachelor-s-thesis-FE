// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  NETWORK: "rinkeby",
  AUTHORIZATION: '0x08d6GE71A953ad57BY5IRQ75d7I8KP9A036431Z2V4A4EABA7MNZ887f2E961K19I262b02978',
  ADDRESS: '0x5923B28c59c027b3Cd6a8E51e794BF8004d2ecc3',
  CONTRACT_ADDRESS: '0x08dEAad576175d71A953A0364A4262b087f22978',
  API_URL: 'http://localhost:5445',
  METAMASK_LINK: 'https://metamask.io/',
  METAMASK_ERRORS: {
    notInstalled: 'ERROR.METAMASK__NOT__INSTALLED',
    needUserPermission: 'ERROR.NEED__USER__PERMISSION',
    failedToRetrieveGasPrice: 'ERROR.FAILED__RETRIEVING__GAS__PRICE',
  },
  CURRENCY: "usd",
  SUCCESS_URL: "http://localhost:4200/?payment=success",
  CANCEL_URL: "http://localhost:4200/?payment=cancel"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
