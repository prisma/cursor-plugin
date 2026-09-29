---
name: prisma-orm
description: Use for Prisma 8 ORM setup, schema, queries, migrations, runtime code, or upgrades. Load the skill shipped with the project's ORM package.
---

# Prisma ORM guidance

1. Check the project's Prisma packages and lockfile to confirm it uses Prisma 8. Do not infer the ORM version from the CLI version alone.
2. Run the installed Prisma CLI's `skills sync` command through the project's package manager. Then read the project's `.cursor/skills/prisma-8/SKILL.md` and the reference files it selects. If the project configures another skills directory, find the synced copy there.
3. If the project does not use Prisma 8 or the skill cannot be read, explain the mismatch and use the [Prisma ORM documentation](https://www.prisma.io/docs/orm) for the installed version. Do not guess at an API.
