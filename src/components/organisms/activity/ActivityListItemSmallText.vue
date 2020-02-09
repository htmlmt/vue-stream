<template lang="html">
	<p
		class="
			description__time

			m-0
			text-center
			text-gray-600
			w-full

			lg:absolute
			lg:text-right
			lg:w-auto
		"
	>
		<slot />
	</p>
</template>

<script>
export default {
	name: "ActivityListItemSmallText",
}
</script>
