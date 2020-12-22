import fetch from "node-fetch";
export type Info = {
  client_id: string;
  client_secret: string;
};
export type TokenResponse = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
};
export async function exchangeToken({
  client_id,
  client_secret,
}: Info): Promise<TokenResponse> {
  const res = await fetch(
    `https://${client_id}:${client_secret}@discord.com/api/v8/oauth2/token`,
    {
      method: "POST",
      body: "scope=applications.commands.update&grant_type=client_credentials",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await res.json();
}
export async function revokeToken(
  { client_id, client_secret }: Info,
  token: string
  // eslint-disable-next-line @typescript-eslint/ban-types
): Promise<{}> {
  const res = await fetch(
    `https://${client_id}:${client_secret}@discord.com/api/v8/oauth2/token/revoke`,
    {
      method: "POST",
      body: `token=${token}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await res.json();
}
