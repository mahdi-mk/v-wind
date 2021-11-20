<template>
    <div class="relative inline-flex items-center" v-if="icon">
        <span v-if="icon" :class="iconClass"></span>
        <input  type="text" 
                :class="textInputClass" 
                :placeholder="this.$attrs.placeholder" 
                :disabled="this.$attrs.disabled">
    </div>

    <input  type="text" 
        :class="textInputClass" 
        :placeholder="this.$attrs.placeholder" 
        :disabled="this.$attrs.disabled"
        v-if="icon == null">
        
    <!-- <span>This is help text.</span> -->
</template>

<script>
export default {
    props: {
        icon: {
            type: String
        },
        iconPosition: {
            type: String,
            default: 'left'
        },
        size: {
            type: String,
            default: 'normal'
        },
    },
    computed: {
        textInputClass: function () {
            return [
                'text-gray-700',
                'rounded-lg',
                'border',
                'border-gray-300',
                'outline-none',
                'shadow-sm',
                'transition',
                'hover:border-gray-400',
                'ring-primary',
                'focus:border-none',
                'focus:ring-1',
                {
                    'px-4': this.icon == null,
                    'py-3': true,
                    'pl-10': this.icon && this.iconPosition === 'left',
                    'pr-10': this.icon && this.iconPosition === 'right',
                    'pr-4':  this.icon && this.iconPosition === 'left',
                    'pl-4':  this.icon && this.iconPosition === 'right',
                    'text-lg': this.size === 'large',
                    'text-sm': this.size === 'small',
                }
            ]
        },
        iconClass: function () {
            return [
                this.icon,
                'absolute',
                'text-gray-500',
                'text-lg',
                {
                    'ml-4': this.iconPosition === 'left',
                    'mr-4': this.iconPosition === 'right',
                    'left-0': this.iconPosition === 'left',
                    'right-0': this.iconPosition === 'right'
                }
            ]
        }
    }
}
</script>
