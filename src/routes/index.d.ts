// This is needed so that Typescript does not complain
// about importing raw svelte files as string

declare module '*.svelte?raw' {
	const content: string
	export default content
}
