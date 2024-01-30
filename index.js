const msal261 = require("@azure/msal-node-2.6.1");
const msal262 = require("@azure/msal-node-2.6.2");

async function main(msal) {
  console.log("using version: ", msal.version);
  const config = {
    auth: {
      clientId: "clientId",
      // Specify an invalid tenant id to trigger the error
      authority: "https://login.microsoftonline.com/invalid-tenant-id",
      clientSecret: "clientSecret",
    },
  };

  const cca = new msal.ConfidentialClientApplication(config);

  const tokenRequest = {
    // scopes doesn't matter in this case, just needs to be non-empty
    scopes: ["https://graph.microsoft.com/.default"],
  };

  const response = await cca.acquireTokenByClientCredential(tokenRequest);
  console.log(response);
}

main(msal261)
  .catch(console.error)
  .then(() => main(msal262))
  .catch(console.error);
