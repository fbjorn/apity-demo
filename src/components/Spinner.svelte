<script lang="ts">
</script>

<div class="wrapper">
	<svg class="spinner" viewBox="0 0 50 50">
		<circle class="path" cx="25" cy="25" r="20" fill="none" />
	</svg>
	<div>Loading...</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.spinner {
		animation: rotate 2s linear infinite;
		width: 8rem;
		height: 8rem;
		& .path {
			stroke: var(--primary-color);
			stroke-linecap: round;
			animation: dash 1.5s ease-in-out infinite;
			stroke-width: 3;
		}
	}
	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
</style>
