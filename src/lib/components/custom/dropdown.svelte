<script lang="ts">
	type Props = {
		disabled?: boolean
		up?: boolean
		left?: boolean
	}

	let { disabled = false, up = false, left = false }: Props = $props()

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
</script>

<div
	bind:this={dropdownElement}
	class="dropdown"
	role="combobox"
	aria-haspopup="listbox"
	aria-expanded={showDropdown}
	aria-controls={dropdownId}
>
	<div on:click={onClick} on:keypress={onClick} role="button" tabindex={0}>
		<slot name="button" disabled active={showDropdown} />
	</div>

	<div class={`root`} aria-hidden={!showDropdown}>
		<div
			class={`${showDropdown ? '' : 'hidden'} ${up ? 'up' : ''} ${left ? 'left' : ''}`}
			id={dropdownId}
			role="listbox"
			aria-labelledby="dropdown-button"
		>
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.root {
		position: relative;

		div {
			position: absolute;
			inset: calc(100% + var(--spacing-6)) 0 auto auto;
			width: max-content;
			max-width: 450px;
			z-index: 1;
			border-radius: var(--border-radius);
			box-shadow: 0 1px 5px 0 rgba(var(--color-accent-rgb, var(--color-dark-base-rgb)), 0.25);
			backdrop-filter: blur(var(--blur));

			&.hidden {
				display: none;
			}

			&.up {
				inset: auto 0 50px auto;
			}

			&.left {
				/* inset: auto auto 50px 0; */
				top: 4px;
				right: 0;
				bottom: auto;
				left: auto;
			}
		}
	}
</style>
