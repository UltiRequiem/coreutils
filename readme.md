# coreutils

Cross-platform JavaScript rewrite of the GNU coreutils. This project uses
[Deno](https://deno.land) as runtime.

## Installing all the commands

You need [Deno](https://deno.land/#installation) installed
for this step. This will install all the commands:

```bash
curl -fsSL https://deno.land/x/coreutils/install.sh | sh
```

This will install the commands with the `js` prefix.

E.g If you want to use the [`yes`](./bin/yes.ts) command, you have to write:

```bash
jsyes
```

## Installing Individual Commands

Example installing the [`yes`](./bin/yes.js) command:

```bash
deno install https://deno.land/x/coreutils/bin/yes.js
```

If you want to install the script with other name check the
[Deno docs](https://deno.land/manual/tools/script_installer).

The following commands are currently available:

- [yes](https://deno.land/x/coreutils/bin/yes.js)
- [pwd](https://deno.land/x/coreutils/bin/pwd.js)

Some commands need extra permissions, check the [documentation](./docs/) if you
are having problems executing or installing any command.

## License

This project is licensed under the [MIT License](./license).
