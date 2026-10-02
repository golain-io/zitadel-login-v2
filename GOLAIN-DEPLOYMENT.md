# Golain Login V2

Deploy branch `deploy/golain`. It starts from `deploy/omniwot` and uses a single
centered login card, Golain text branding, and the existing Zitadel login flows.
There is no illustration, background image, split layout, or analytics embed.

For a Next.js deployment, use `apps/login` as the application root and install from
the monorepo with its pinned pnpm version. See the existing README for build and
hosting commands. From the repo root, build with:

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm generate
corepack pnpm --filter @zitadel/client build
corepack pnpm --filter @zitadel/login build
```

Protobuf generation is pinned to Zitadel `v4.0.3`, matching the current Golain
issuer deployment, and fetches only the protobuf source. Set these server-only environment values:

- `ZITADEL_API_URL=https://dev.zitadel.golain.io`
- `ZITADEL_SERVICE_USER_TOKEN`: PAT of a service account with `IAM_LOGIN_CLIENT`

Do not put the PAT in a `NEXT_PUBLIC_*` variable or commit it. Leave
`NEXT_PUBLIC_BASE_PATH` unset for a standalone login domain; when hosting under
`/ui/v2/login`, set it to that path at build time.

After deployment, add the login domain to Zitadel's trusted domains. On the
existing Golain Agents application, enable **Use new Login UI** and set **Custom
base URL** to the deployed Login V2 base URL. Keep the issuer as
`https://dev.zitadel.golain.io`. Configure the direct ChatGPT callback as
`https://chatgpt.com/connector_platform_oauth_redirect`.

Enable Login V2 for this application first. Send the deployed public base URL
back so the MCP API and existing ChatGPT connection can be switched and tested.
