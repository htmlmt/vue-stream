<template lang="html">
<p
    class="
        hidden

        lg:block
        lg:text-gray-700
        lg:m-0
        lg:overflow-hidden
        lg:whitespace-no-wrap
        lg:w-full
    "
>
    <slot />
</p>
</template>

<script>
export default {
    name: 'StreamActivityItemText',
};
</script>
