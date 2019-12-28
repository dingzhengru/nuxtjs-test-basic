export const state = () => ({
    list: []
})

export const getters = {
    getList (state) {
        return state.list
    }
}

export const mutations = {
    add (state, todo) {
        state.list.push(todo)
    },
    remove (state, todo) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
        todo.done = !todo.done
    }
}