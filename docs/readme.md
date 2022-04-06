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
deno install -n jsyes https://deno.land/x/coreutils/commands/yes/yes.ts
```

> [Deno Docs](https://deno.land/manual/tools/script_installer)

## Usage

If you use the method that install all the commands together you can invoke them
as the normal coreutils commands + the `js` prefix, example 👇

```sh
jsyes # yes equivalent
```

## Contributing

This project is actively looking for contributors! ⭐

Check the [contribution docs](./CONTRIBUTING.md) and the issue
[#35](https://github.com/UltiRequiem/coreutils/issues/35) for more info 🏹

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/coreutils/contributors) who
participated in this project ✨

## Licence

Licensed under the MIT License 📄
