<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar >
			<svelte:fragment slot="lead">
				<h1 class="text-xl">
					<em>
					<strong>
							<span style="font-size: 150%; font-weight:900;">UN</span>
					</strong>
							<span style="font-size: 150%; font-family:'Courier New', Courier, monospace">matchup Builder</span>
					</em>
				</h1>
				
				<!--<img style="margin: auto; height:80px;" src="/unmatched_nav.png" alt="navving">-->
			</svelte:fragment>
			<svelte:fragment slot="trail">	
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/map-pick"
					target="_blank"
					rel="noreferrer"
				>
					map-pick
				</a>
				<a
				class="btn btn-sm variant-ghost-surface"
				href="/sisophys"
				target="_blank"
				rel="noreferrer"
			>
				sisophys
			</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/home-page"
					target="_blank"
					rel="noreferrer"
				>
					home
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>