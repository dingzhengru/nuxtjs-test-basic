<template>
    <div>
        <h2>index.vue</h2>
        <v-btn
            @click="addCounter()"
            class="warning">
            add counter
        </v-btn>
        <p>counter: {{ getCounter }}</p>

        <br>

        <v-text-field 
        v-model="todo.text"
        label="todo text"></v-text-field>
        <v-btn
            @click="addTodos(todo)"
            class="warning">
            add todos
        </v-btn>
        <p>todo: {{ todo }}</p>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Text</th>
                        <th class="text-left">Done</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in getTodos" :key="item.index">
                        <td>{{ index }}</td>
                        <td>{{ item.text }}</td>
                        <td>{{ item.done }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    data () {
        return {
            todo: {
                text: '',
                done: false
            }
        }
    },
    computed: {
        getCounter () {
            return this.$store.getters.getCounter
        },
        getTodos () {
            return this.$store.getters['todos/getList']
        }
    },
    methods: {
        addCounter () {
            this.$store.commit('increment')
        },
        addTodos (todo) {
            const item = _.cloneDeep(todo)
            this.$store.commit('todos/add', item)
        }
    }
}
</script>
