if ! command -v deno &>/dev/null; then
	echo "Deno is not in PATH." && exit
fi

commands_to_install=("yes" "pwd" "whoami" "clear" "cat" "echo" "time" "printenv" "arch" "touch" "ls")

for bin in "${commands_to_install[@]}"; do
	echo "deno install -f -A -n js$bin https://deno.land/x/coreutils/command/$bin/$bin.ts" | sh
done
