<template lang="html">
	<div>
		<SkipLink content="Skip to main content" />
        <TheStream />
	</div>
</template>

<script>
import SkipLink from "@/components/atoms/SkipLink";

import TheStream from "@/components/organisms/stream/TheStream";

export default {
	name: "ParticipantView",
	components: {
		SkipLink,
		TheStream,
	},
	created() {
		this.$store.dispatch("getCurrentParticipant", {
			id: this.$route.params.id
		});
		this.$store.dispatch("getIcons", {
			instance: "demo"
		});
	},
};
</script>

<style lang="less" scoped>
div {
	height: 100%;
}
</style>
