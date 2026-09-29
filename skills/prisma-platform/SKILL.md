---
name: prisma-platform
description: Use for Prisma 8 platform work with Postgres, Compute, Object Storage, or the Prisma CLI. Load the platform skill shipped with the project's Prisma CLI.
---

# Prisma platform guidance

1. For workspace resources, use the plugin's hosted Prisma MCP server when its tools cover the task.
2. For CLI work, confirm the project uses the Prisma 8 CLI. Run its `skills sync` command through the project's package manager. Read the project's `.cursor/skills/prisma-platform-core-concepts/SKILL.md` and follow its references. If the project configures another skills directory, find the synced copy there. The source lives in [prisma/prisma-cli](https://github.com/prisma/prisma-cli/tree/main/skills/prisma-platform-core-concepts), but the installed CLI copy matches the project's version.
3. If the project does not use the Prisma 8 CLI or this skill cannot be read, check the [Prisma CLI documentation](https://www.prisma.io/docs/cli) and the installed command's help before acting. Do not assume its commands match Prisma 8.
