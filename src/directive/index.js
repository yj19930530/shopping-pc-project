import Vue from "vue";
export default {
    install() {
        Vue.directive('words', {
            inserted: (el, binding) => {
                if (binding.value.trim() !== '' && binding.value && binding.value !== 0) {
                    el.innerHTML = binding.value
                } else {
                    el.innerHTML = '-'
                }
            }
        })
    },
}