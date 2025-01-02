import LaraTable from './src/MainTable.vue';

export default {
    install: (app: any) => {
        app.component('LaraTable', LaraTable);
    }
}
