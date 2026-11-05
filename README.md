# Disclaimer

I'm not the author of this template, the original author is [@BartoszJarocki](https://github.com/BartoszJarocki/cv.git)

# Development

Use Node.js 24 and pnpm 10.34.9 (also pinned in `package.json`).

```
npm install --global pnpm@10.34.9
pnpm install --frozen-lockfile
pnpm dev
```

# Validation

```
pnpm lint
pnpm typecheck
pnpm build
pnpm audit
```

CI runs these checks on pull requests and pushes to `main`. Tailwind CSS stays on
the patched 3.x line with its compatible `tailwind-merge` 2.x release to preserve
the existing design. `pnpm-lock.yaml` is used for both Vercel and Docker installs.

# Docker

```
docker compose up --build
```

The image uses Node.js 24, installs the locked dependencies, and runs as the
unprivileged `node` user.

# License

[MIT](https://choosealicense.com/licenses/mit/)
