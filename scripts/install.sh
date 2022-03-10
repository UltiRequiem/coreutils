if ! command -v deno &>/dev/null; then
	echo "Deno is not in PATH." && exit
fi

for bin in "commands/*"; do
  echo $bin
	# echo "deno install -f -A -n js$bin https://deno.land/x/coreutils/command/$bin/$bin.ts" 
done
