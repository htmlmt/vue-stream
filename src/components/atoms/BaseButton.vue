<template lang="html">
	<button
		@click="showPanels(panelsToShow)"
		class="
			block
			cursor-pointer
			flex
			items-center
			px-2
			py-3
			text-gray-700
			w-full

			lg:px-4
		"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: "BaseButton",
	props: {
		panelsToShow: {
            type: Array,
        },
	},
	methods: {
        showPanels(panelsToShow) {
            document.body.classList.toggle("overlay");

            this.$store.commit("updatePanels", panelsToShow);
        },
	},
}
</script>

<style lang="less">
@import "../../assets/styles/main/variables/screen-sizes";

@import "../../assets/styles/main/mixins/media-queries";

button {
	-webkit-appearance: none;
}

.screen-lg ({
	button {
		opacity: 0.25;

		&.active {
			opacity: 1;
		}
	}
});
</style>
