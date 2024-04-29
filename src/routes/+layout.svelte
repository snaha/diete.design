<script>
	import MenuItem from '$lib/components/ui/menu/menu-item.svelte'
	import MenuTitle from '$lib/components/ui/menu/menu-title.svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Button from '$lib/components/ui/button.svelte'
	import { Light, SidePanelCloseFilled, SidePanelOpenFilled } from 'carbon-icons-svelte'
	import '../app.pcss'

	let isMenuOpen = $state(false)
</script>

<div class="container">
	<div class="menu-{isMenuOpen ? 'open' : 'closed'}">
		<div class="menu-button-container">
			<Button variant="ghost" onclick={() => (isMenuOpen = !isMenuOpen)}>
				{#if isMenuOpen}
					<SidePanelCloseFilled size={24} />
				{:else}
					<SidePanelOpenFilled size={24} />
				{/if}
			</Button>
		</div>

		{#if isMenuOpen}
			<MenuTitle content="Diète" bold></MenuTitle>
			<MenuTitle content="Elements" bold></MenuTitle>
			<MenuTitle content="Basic components" bold open>
				<MenuItem href="/components/button">Button</MenuItem>
			</MenuTitle>
		{/if}
	</div>
	<div class="right">
		<div class="header">
			<div class="dark-mode-button-container">
				<Button variant="ghost"><Light size={24} /></Button>
			</div>
		</div>

		<div class="content">
			<slot />

			<section id="footer">
				<Typography>
					Made by diete. Source code is available on <a
						href="https://github.com/diete-design/diete.design">Github</a
					>.
				</Typography>
			</section>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(body) {
		margin: 0;
	}
	.container {
		display: flex;
		flex-direction: row;
	}
	.menu-button-container {
		padding-left: 16px;
		padding-top: 16px;
		padding-bottom: 16px;
	}
	.menu-open {
		background-color: var(--colors-low);
		min-width: 238px;
		transition: background-color 0.25s;
		transition: min-width 0.25s;
	}
	.menu-closed {
		background-color: var(--colors-base);
		min-width: 136px;
		transition: background-color 0.25s;
		transition: min-width 0.25s;
	}
	.right {
		flex-direction: column;
		display: flex;
		flex-grow: 1;
	}
	.content {
		margin-left: 16px;
		margin-right: 16px;
		margin-bottom: 80px;
		max-width: 1136px;
	}
	.header {
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-right: 16px;
	}
	.dark-mode-button-container {
	}
</style>
