<template>
    <button :class="btnClass">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        level: {
            type: String,
            default: 'primary'
        },
    },
    computed: {
        btnClass: function () {
            return [
                `bg-${this.level}`,
                `hover:bg-${this.level}-hover`,
                'inline-flex',
                'items-center',
                'text-white',
                'font-medium',
                'px-8',
                'py-2',
                'rounded-lg',
                'shadow-md'
            ]
        },
    }
}
</script>
