<template lang="html">
	<li class="
		border-gray-400
		border-t
		relative
		w-full
		z-100

		lg:border-b
		lg:border-r
		lg:w-auto
	">
		<slot />
	</li>
</template>

<script>
export default {
	name: "ButtonListItem",
}
</script>

<style lang="less">
li {
	background-color: white;
}
</style>
