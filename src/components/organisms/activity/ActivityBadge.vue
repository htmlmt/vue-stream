<template lang="html">
	<div
		class="
			item__badge

			border
			border-b-0
			border-gray-400
			border-solid
			flex
			items-center
			justify-center
			rounded-t-lg

			lg:border-b
			lg:border-r-0
			lg:rounded-l-lg
			lg:rounded-tr-none
		"
	>
		<img
			:alt="item.title"
			:src="item.imageURL"
			v-if="item.type === 'participantBadge'"
		/>
		<p
			class="
				font-display
				text-green-400
				m-0
			"
			v-if="item.type === 'donation'"
		>
			<strong>{{ item.amount | formatMoney }}</strong>
		</p>
	</div>
</template>

<script>
import numeral from "numeral";

export default {
	name: "ActivityBadge",
	filters: {
        formatMoney(amount) {
            return numeral(amount).format("($0a)");
        }
    },
	props: {
		item: {
			type: Object,
			default: function () {
				return {
					title: "",
					imageURL: "",
					type: "",
					amount: 0,
				}
			}
		}
	},
}
</script>

<style lang="less">
@import "../../../assets/styles/main/variables/screen-sizes";

@import "../../../assets/styles/main/mixins/media-queries";

.item__badge {
	height: 70%;

	.screen-lg ({
		height: auto;
		width: 60px;
	});
}
</style>
