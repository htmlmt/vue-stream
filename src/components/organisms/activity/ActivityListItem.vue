<template lang="html">
	<li
		:style="
			{
				width: (100 / totalItems) + '%'
			}
		"
		class="
			pl-4
			relative
			w-1/3
			z-100

			lg:flex
			lg:items-stretch
			lg:static
		"
    >
		<slot />
	</li>
</template>

<script>
export default {
	name: "ActivityListItem",
    props: {
        totalItems: {
            type: Number,
			default: 1,
        },
    },
}
</script>
