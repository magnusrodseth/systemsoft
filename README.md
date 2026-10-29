# SystemSoft

Monorepo for the SystemSoft website, its Sanity content studio, and shared UI components.
The website presents the company, employees, expertise, and employee CVs.

## Workspaces

| Path | Purpose |
|---|---|
| [apps/web/](apps/web/) | Next.js Pages Router website with Apollo Client and GraphQL queries |
| [apps/cms/](apps/cms/) | Sanity Studio with employee, expertise, contact, and CV schemas |
| [packages/ui/](packages/ui/) | Shared React components, fonts, and Stitches theme |
| [packages/tsconfig/](packages/tsconfig/) | Shared TypeScript configurations |
| [packages/eslint-config-custom/](packages/eslint-config-custom/) | Shared ESLint configuration |

## Development

The root [package.json](package.json) pins pnpm 7.18.1 and declares Node.js 14 or later.
This is the repository's historical toolchain declaration; check workspace dependencies before changing Node or package-manager versions.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The root development command runs workspace development scripts in parallel.
To run one app:

```sh
pnpm --filter web dev
pnpm --filter cms dev
```

## Content and GraphQL

The web app reads the Sanity GraphQL endpoint configured in
[apps/web/src/constants/index.ts](apps/web/src/constants/index.ts).
Sanity's project and dataset are configured in
[apps/cms/sanity.config.ts](apps/cms/sanity.config.ts) and
[apps/cms/sanity.cli.ts](apps/cms/sanity.cli.ts).
Content editing and schema deployment require access to that Sanity project.

After changing GraphQL queries or the published schema, regenerate the client types:

```sh
pnpm --filter web generate
```

The code-generation inputs and output directory are defined in
[apps/web/codegen.ts](apps/web/codegen.ts).

## Checks

```sh
pnpm lint
pnpm build
```

These commands use the task pipeline in [turbo.json](turbo.json).
The web app's content queries depend on the configured Sanity service.
