# Contributing

Glad you want to contribute, keep reading to have a general idea of the project!

## Adding dependencies

You can add the dependencies that you consider necessary to speed up
development, but try to use as few as possible.

If the dependency is from the [std](https://deno.land/std) add it on
[deps_std.ts](./deps_std.ts).

Any external dependency should go to [deps_dev.ts](./deps_dev.ts), and what we
use only in development (eg. testing) goes to [deps_dev.ts](./deps_dev.ts).

Dependencies are automatically updated by
[udd](https://github.com/hayd/deno-udd#scheduled-github-action) so there is not
need to manage that.
