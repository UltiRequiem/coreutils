# coreutils

Cross-platform Deno Rewrite of the GNU Coreutils 🦕

## Install

Any of the options here will require that you have [Deno](https://deno.land)
Installed.

We are currently working on provide binaries on
[#27](https://github.com/UltiRequiem/coreutils/issues/27) 📦

> While [Node.js](https://nodejs.org) support is not a principal goal we plan to
> support it, [#34](https://github.com/UltiRequiem/coreutils/issues/34) 👀

### All commands

#### Linux

- Using `curl`

```sh
curl -fsSL https://deno.land/x/coreutils/scripts/install.sh | sh
```

- Using `wget`

```sh
wget -O - https://deno.land/x/coreutils/scripts/install.sh | sh
```

#### Windows

Still a WIP, if you are interested in helping check the issue
[#36](https://github.com/UltiRequiem/coreutils/issues/36) 🚀

> [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/overview)
> user needed! 😩

### Individual commands

This is equal on Windows and Linux

```sh
deno install https://deno.land/x/coreutils/commands/yes/yes.ts
```

Or

```sh
deno install https://deno.land/x/coreutils_yes/yes.ts
```

## License

Licensed under the [MIT License](./license).
