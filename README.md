# Prisma Cursor Plugin

The Prisma plugin for Cursor provides the hosted Prisma MCP server and short entry points to the official Prisma 8 skills.

## Features

### 🔌 MCP Server Integration
- Connects to the hosted Prisma MCP server at `https://mcp.prisma.io/mcp`
- Lets you manage Prisma Postgres databases, existing Prisma Compute deployments, and Object Storage buckets and access keys in your selected workspace

### 🎯 Skills
- `prisma-orm` and `prisma-composer` link to the official skills. They use a project copy when available and the official source when it is not.

## Installation

### From Cursor Marketplace

Open **Customize** in Cursor, find [Prisma](https://cursor.com/marketplace/prisma), and select **Install**. Choose a project or user scope. You can also use `/add-plugin prisma` in Cursor chat.

### Test a local copy

1. Copy this repository into `~/.cursor/plugins/local/prisma` so that `.cursor-plugin/plugin.json` is inside that folder.
2. Restart Cursor or run **Developer: Reload Window**.
3. Open **Customize** and check that Prisma has one MCP server and two skills.

Cursor loads local plugins only when local plugin imports are allowed. An installed Marketplace copy of Prisma takes precedence over a local copy with the same name.

## Configuration

### MCP Server

The plugin configures the hosted server automatically. On first use, sign in with your Prisma account and select a workspace. The hosted MCP connection does not use your project's `DATABASE_URL`. A Prisma CLI command or app using your own database may still need that variable.

## Usage

### Using Skills

Invoke `/prisma-orm` or `/prisma-composer` in Cursor chat. Each entry point prefers a skill that matches the project's installed package version. If none is available locally, it points to the official source. For a new Prisma 8 project, follow the setup guide before applying the ORM skill.

## Project Structure

```
prisma-cursor-plugin/
├── .cursor-plugin/
│   └── plugin.json           # Plugin manifest
├── skills/
│   ├── prisma-orm/SKILL.md
│   └── prisma-composer/SKILL.md
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
