# coreutils

Cross-platform JavaScript rewrite of the GNU coreutils. This project uses
[Deno](https://deno.land) as runtime.

## Installing all the commands

You need [Deno](https://deno.land/#installation) installed for this step.

```bash
curl -fsSL https://deno.land/x/coreutils/install.sh | sh
```

This will install the commands with the `js` prefix.

E.g If you want to use the [`yes`](./bin/yes.ts) command, you have to write:

```bash
jsyes
```

## Installing Individual Commands

Example installing the [`yes`](./bin/yes.ts) command:

```bash
deno install https://deno.land/x/coreutils/bin/yes.ts
```

If you want to install the script with other name check the
[Deno docs](https://deno.land/manual/tools/script_installer).

The following commands are currently available:

- [yes](https://deno.land/x/coreutils/bin/yes.ts)
- [pwd](https://deno.land/x/coreutils/bin/pwd.ts)
- [whoami](https://deno.land/x/coreutils/bin/whoami.ts)
- [time](https://deno.land/x/coreutils/bin/time.ts)
- [echo](https://deno.land/x/coreutils/bin/echo.ts)
- [cat](https://deno.land/x/coreutils/bin/cat.ts)
- [clear](https://deno.land/x/coreutils/bin/clear.ts)
- [printenv](https://deno.land/x/coreutils/bin/printenv.ts)
- [arch](https://deno.land/x/coreutils/bin/arch.ts)
- [touch](https://deno.land/x/coreutils/bin/touch.ts)

Some commands need extra permissions, check the [documentation](./docs/) if you
are having problems executing or installing any command.

## Notes

This package is available through nest.land too 👇

https://nest.land/package/coreutils

There is a lot to do! If you like the project check the issues please!

## License

This project is licensed under the [MIT License](./license).
