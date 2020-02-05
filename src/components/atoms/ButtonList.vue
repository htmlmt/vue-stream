<template lang="html">
	<ul class="
		nav__buttons

		bg-white
		border
		border-gray-400
		border-t-0
		bottom-0
		fixed
		flex
		flex-wrap
		items-center
		justify-end
		list-none
		mx-auto
		my-0
		pointer-events-none
		rounded-lg

		lg:border-0
		lg:bottom-auto
		lg:mx-0
		lg:pointer-events-auto
		lg:relative
		lg:w-auto
	">
		<slot />
	</ul>
</template>

<script>
export default {
	name: 'ButtonList',
}
</script>
