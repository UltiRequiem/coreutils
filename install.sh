if ! command -v deno &>/dev/null; then
	echo "Deno is not in PATH"
	exit
fi

command="deno install -f -A"
url="https://deno.land/x/coreutils/bin/"
commands_to_install=("yes" "pwd")

for bin in "${commands_to_install[@]}"; do
	echo "$command $url$bin.ts" | sh
done
