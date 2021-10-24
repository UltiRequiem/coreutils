if ! command -v deno &>/dev/null; then
	echo "Deno is not in PATH"
	exit
fi

deno install -f https://deno.land/x/coreutils/bin/yes.js
deno install -f --allow-read https://deno.land/x/coreutils/bin/pwd.js
