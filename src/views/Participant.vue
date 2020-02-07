<template lang="html">
	<div>
		<SkipLink content="Skip to main content" />
        <Stream />
	</div>
</template>

<script>
import SkipLink from '@/components/atoms/SkipLink';
import Stream from '@/components/stream/Stream';

export default {
	name: 'HomeView',
	components: {
		SkipLink,
		Stream,
	},
	created() {
		this.$store.dispatch('getCurrentParticipant', {
			id: this.$route.params.id
		});
		this.$store.dispatch('getIcons', {
			instance: 'demo'
		});
	},
};
</script>

<style lang="less" scoped>
div {
	height: 100%;
}
</style>
