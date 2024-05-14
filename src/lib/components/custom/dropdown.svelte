<script lang="ts">
	import type { Snippet } from 'svelte'
	import Button from '$lib/components/ui/button.svelte'

	type Props = {
		disabled?: boolean
		up?: boolean
		left?: boolean
		button: Snippet
		children: Snippet
	}

	let { disabled = false, up = false, left = false, button, children }: Props = $props()

	let showDropdown = $state(false)
	let dropdownElement: HTMLElement
	let dropdownId: string

	function close(ev: MouseEvent) {
		const target = ev.target as unknown as Node
		if (dropdownElement.contains(target)) {
			// Clicked on the dropdown button or inside the dropdown
		} else {
			// Clicked outside the dropdown
			showDropdown = false
		}
	}

	function onKeyUp(ev: KeyboardEvent) {
		if (ev.key === 'Escape') {
			showDropdown = false
		}
	}

	$effect(() => {
		window.addEventListener('click', close)
		window.addEventListener('keyup', onKeyUp)

		return () => {
			window.removeEventListener('click', close)
			window.removeEventListener('keyup', onKeyUp)
		}
	})

	function onClick() {
		if (!disabled) showDropdown = !showDropdown
	}

	function onKeyPress() {
		// omit keypress because onClick will be dispatched anyways
	}
</script>

<div
	bind:this={dropdownElement}
	class="dropdown"
	role="combobox"
	aria-haspopup="listbox"
	aria-expanded={showDropdown}
	aria-controls={dropdownId}
	tabindex={-1}
>
	<div on:click={onClick} on:keypress={onKeyPress} role="button" tabindex={-1}>
		<Button variant="solid" active={showDropdown}>{@render button()}</Button>
	</div>

	<div class={`root`} aria-hidden={!showDropdown}>
		<div
			class:hidden={!showDropdown}
			class:up
			class:left
			id={dropdownId}
			role="listbox"
			aria-labelledby="dropdown-button"
			tabindex={-1}
		>
			{@render children()}
		</div>
	</div>
</div>

<style lang="postcss">
	.root {
		position: relative;

		div {
			position: absolute;
			z-index: 1;
			backdrop-filter: blur(var(--blur));
			inset: calc(100% + var(--spacing-6)) 0 auto auto;
			box-shadow: 0 1px 5px 0 rgba(var(--color-accent-rgb, var(--color-dark-base-rgb)), 0.25);
			border-radius: var(--border-radius);
			width: max-content;
			max-width: 450px;

			&.hidden {
				display: none;
			}

			&.up {
				inset: auto 0 50px auto;
			}

			&.left {
				top: 4px;
				right: 0;
				bottom: auto;
				left: auto;
			}
		}
	}
</style>
