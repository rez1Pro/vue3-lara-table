import { Plugin } from 'vue'
import { PaginatedResponse, TableColumn } from './types'

declare const LaraTable: Plugin
export default LaraTable

export {
    PaginatedResponse,
    TableColumn
}

declare module 'vue3-lara-table' {
    export default LaraTable
    export {
        PaginatedResponse,
        TableColumn
    }
} 