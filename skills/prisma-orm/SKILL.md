---
name: prisma-orm
description: Use for Prisma ORM setup, schema, queries, migrations, runtime code, or upgrades. Find the guidance that matches the project's installed Prisma version.
---

# Prisma ORM guidance

1. Check the project's Prisma packages and lockfile to identify its ORM version. Do not infer it from the CLI version alone.
2. For Prisma 8, run the installed Prisma CLI's `skills sync` command through the project's package manager. Then read the project's `.cursor/skills/prisma-8/SKILL.md` and the reference files it selects. If the project configures another skills directory, find the synced copy there. The source lives in [prisma/orm](https://github.com/prisma/orm/tree/main/skills/prisma-8), but the installed package copy matches the project's version.
3. If the skill cannot be synced or read, explain the blocker and use the [Prisma ORM documentation](https://www.prisma.io/docs/orm) for the installed version. Do not guess at an API.
4. For Prisma 6 or 7, use the matching [Prisma skills registry](https://github.com/prisma/skills) and versioned documentation. Its `prisma-cli`, `prisma-client-api`, and `prisma-upgrade-v7` skills cover earlier ORM work. The CLI's `skills sync` command does not install skills from that registry. Do not apply Prisma 8 instructions to an earlier project.
