export function formatCount(value: number) {
	if (value < 1_000) return value.toString()
	if (value < 1_000_000) return `${(value / 1_000).toFixed(1)}K`
	return `${(value / 1_000_000).toFixed(1)}M`
}
