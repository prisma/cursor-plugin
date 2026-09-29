# Prisma Cursor Plugin

The Prisma plugin for Cursor provides the hosted Prisma MCP server, rules, and Prisma 8 skills for database development.

## Features

### 🔌 MCP Server Integration
- Connects to the hosted Prisma MCP server at `https://mcp.prisma.io/mcp`
- Lets you manage Prisma Postgres databases, Prisma Compute deployments, and Object Storage in your selected workspace

### 📋 Rules
- **Schema Conventions**: Enforces Prisma naming conventions and best practices
- **Migration Best Practices**: Guidelines for safe database migrations

### 🎯 Skills
- Three short entry points for Prisma 8 ORM, Composer, and platform work. They load the skills shipped with the project's Prisma packages.

## Installation

### From Cursor Marketplace

Open **Customize** in Cursor, find [Prisma](https://cursor.com/marketplace/prisma), and select **Install**. Choose a project or user scope. You can also use `/add-plugin prisma` in Cursor chat.

### Test a local copy

1. Copy this repository into `~/.cursor/plugins/local/prisma` so that `.cursor-plugin/plugin.json` is inside that folder.
2. Restart Cursor or run **Developer: Reload Window**.
3. Open **Customize** and check that Prisma has one MCP server, plus its rules and skills.

Cursor loads local plugins only when local plugin imports are allowed. An installed Marketplace copy of Prisma takes precedence over a local copy with the same name.

## Configuration

### MCP Server

The plugin configures the hosted server automatically. On first use, sign in with your Prisma account and select a workspace. The hosted MCP connection does not use your project's `DATABASE_URL`. A Prisma CLI command or app using your own database may still need that variable.

## Usage

### Using Rules

The schema conventions rule applies to Prisma schema files. The migration best practices rule is available when needed.

### Using Skills

Invoke `/prisma-orm`, `/prisma-composer`, or `/prisma-platform` in Cursor chat. Each skill checks the project and finds the instructions for that task.

Prisma 8, Composer, and the platform CLI ship detailed skills from [prisma/orm](https://github.com/prisma/orm/tree/main/skills/prisma-8), [prisma/composer](https://github.com/prisma/composer/tree/main/skills/prisma-composer-core-concepts), and [prisma/prisma-cli](https://github.com/prisma/prisma-cli/tree/main/skills/prisma-platform-core-concepts). Run your project's installed `prisma skills sync` after adding or upgrading those packages.

## Project Structure

```
prisma-cursor-plugin/
├── .cursor-plugin/
│   └── plugin.json           # Plugin manifest
├── rules/
│   ├── schema-conventions.mdc
│   └── migration-best-practices.mdc
├── skills/                   # Three short skills that load project guidance
├── mcp.json                  # MCP server configuration
└── README.md
```

For plugin structure, MCP configuration, and local testing, use Cursor's current [plugin reference](https://cursor.com/docs/reference/plugins) and [installation guide](https://cursor.com/docs/plugins).

## Requirements

- A Prisma account and workspace for the hosted MCP server

## Contributing

Contributions are welcome! Please follow Prisma's contribution guidelines.

## License

MIT

## Support

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Community](https://www.prisma.io/community)
- [GitHub Issues](https://github.com/prisma/cursor-plugin/issues)
