# CoreUtils

Cross-platform JavaScript rewrite of the GNU coreutils.

## Installing

This will install all the commands.

```bash
source <(curl -s https://deno.land/x/coreutils/install.sh)
```

## Installing Individual Commands

Example installing the [`yes`](./bin/yes.js) command:

```bash
deno install https://deno.land/x/coreutils/bin/yes.js
```

The following commands are currently available:

- [yes](https://deno.land/x/coreutils/bin/yes.js)
- [pwd](https://deno.land/x/coreutils/bin/pwd.js)

Some commands need extra permissions, check the documentation if you are having
problems executing or installing any command.

## License

This project is licensed under the [MIT License](./license).
