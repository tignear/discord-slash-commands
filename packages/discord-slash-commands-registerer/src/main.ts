/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { exchangeToken, revokeToken } from "./token";
// eslint-disable-next-line
require("dotenv").config();
async function main() {
  const info = {
    client_id: process.env.CLIENT_ID!,
    client_secret: process.env.CLIENT_SECRET!,
  };
  const { access_token } = await exchangeToken(info);
  console.log(access_token);
  const r = await revokeToken(info, access_token);
  console.log(r);
}
main().catch(console.error);
