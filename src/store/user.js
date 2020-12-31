// import Cookies from "js-cookie";
export default {
    state: {
        langName: 'ch'
    },
    mutations: {
        changeLang(state, lang) {
            state.langName = lang;
        },
    },
    getters: {
        getLangName(state) {
            return state.langName;
        }
    },
}