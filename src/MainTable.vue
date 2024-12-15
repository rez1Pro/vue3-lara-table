<script setup lang="ts" generic="T extends Record<string, any>">
import { Link, router } from '@inertiajs/vue3';
import { computed, PropType, ref, watch } from 'vue';
import type { PaginatedResponse, TableColumn } from '../types';

const emit = defineEmits(['add-item']);
// Define slot types
type SlotProps = {
    item: T;
    column: TableColumn;
}

// Add sorting state
const sortColumn = ref<string | null>(null);
const sortDirection = ref<'asc' | 'desc' | null>(null);

// Add type definition for slots
defineSlots<{
    [K in keyof T | 'actions']: (props: SlotProps) => any;
}>();

interface Props {
    items: PaginatedResponse<T>;
    columns: TableColumn[];
    searchPlaceholder?: string;
    searchKey: string;
    enableAddItem?: boolean;
}

const props = defineProps({
    items: {
        type: Object as PropType<PaginatedResponse<T>>,
        required: true
    },
    columns: {
        type: Array as PropType<TableColumn[]>,
        required: true
    },
    searchPlaceholder: {
        type: String,
        required: false
    },
    searchKey: {
        type: String,
        default: 'search'
    },
    enableAddItem: {
        type: Boolean,
        default: false
    }
}) as Props;

// Add debounce timeout ref
const searchTimeout = ref<number | null>(null);

const filterKey = computed(() => {
    return `filter[${props.searchKey}]` || 'filter[search]';
});

const search = ref<string>(route().params.filter ? (route().params.filter as unknown as Record<string, string>)[props.searchKey] : '');

watch(search, (value: string) => {
    if (searchTimeout.value) {
        clearTimeout(searchTimeout.value);
    }

    searchTimeout.value = setTimeout(() => {
        // Handle both response formats by checking meta property
        const path = props.items.meta?.path || props.items.path;
        router.get(path, {
            [filterKey.value]: value
        }, {
            preserveScroll: true,
            preserveState: true
        });
    }, 300) as unknown as number;
});

const perPage = ref(10);

function updatePerPage() {
    router.get(props.items.meta?.path || props.items.path, {
        [filterKey.value]: search.value,
        per_page: perPage.value
    }, {
        preserveScroll: true,
        preserveState: true
    });
}

// Update computed properties to handle both response formats
const paginatedItems = computed(() => props.items.data);

const from = computed(() => props.items.meta?.from || props.items.from);
const to = computed(() => props.items.meta?.to || props.items.to);
const total = computed(() => props.items.meta?.total || props.items.total);

// Add sort function
const sort = (column: string) => {
    if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn.value = column;
        sortDirection.value = 'asc';
    }

    const sortParam = sortDirection.value === 'desc' ? `-${column}` : column;

    router.get(props.items.meta?.path || props.items.path, {
        ...route().params,
        sort: sortParam
    }, {
        preserveScroll: true,
        preserveState: true
    });
};


</script>
<template>
    <div
        class=" from-white dark:from-gray-800 dark:to-gray-900 overflow-hidden dark:border-gray-700 transition-all duration-300">
        <div>
            <!-- Search & Actions Bar -->
            <div class="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="relative w-full sm:w-64">
                    <input type="text"
                        class="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:focus:border-blue-400"
                        :placeholder="searchPlaceholder ?? 'Search...'" v-model="search">
                    <div class="absolute left-3 top-2.5 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div class="w-full sm:w-auto">
                    <slot :enableAddItem="enableAddItem" name="add-item">
                        <button v-if="enableAddItem" @click="$emit('add-item')"
                            class="w-full sm:w-auto group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-semibold text-sm text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                            Add New Item
                        </button>
                    </slot>
                </div>
            </div>

            <!-- Desktop Table View -->
            <div class="hidden sm:block overflow-x-auto rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                        <tr>
                            <th v-for="column in columns" :key="column.key" scope="col"
                                class="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                :style="column.width ? { width: column.width } : {}" @click="sort(column.key)">
                                <div class="flex items-center space-x-2">
                                    <span>{{ column.label }}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 transition-transform duration-200"
                                        :class="{ 'rotate-180': sortColumn === column.key && sortDirection === 'desc' }"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 15l7-7 7 7" />
                                    </svg>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <template v-for="(item, index) in paginatedItems" :key="item.id || index">
                            <tr v-if="item"
                                class="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                <td v-for="column in columns" :key="column.key"
                                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                                    <slot v-if="$slots[column.key]" :name="column.key" :item="item" :column="column">
                                    </slot>
                                    <template v-else>
                                        {{ item?.[column.key] }}
                                    </template>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

            <!-- Mobile Card View -->
            <div class="sm:hidden space-y-4">
                <div v-for="(item, index) in paginatedItems" :key="item?.id || index"
                    class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
                    <div v-for="column in columns" :key="column.key" class="flex justify-between items-center">
                        <span class="font-medium text-gray-500 dark:text-gray-400">{{ column.label }}:</span>
                        <div class="text-gray-800 dark:text-gray-200">
                            <slot v-if="$slots[column.key]" :name="column.key" :item="item" :column="column"></slot>
                            <template v-else>
                                {{ item?.[column.key] }}
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination Section -->
            <div class="mt-8 flex flex-col items-center justify-between gap-4 sm:gap-6">
                <div class="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="text-center sm:text-left">
                        <p class="text-sm text-gray-600 dark:text-gray-300">
                            Showing
                            <span class="font-bold text-blue-600 dark:text-blue-400">{{ from }}</span>
                            to
                            <span class="font-bold text-blue-600 dark:text-blue-400">{{ to }}</span>
                            of
                            <span class="font-bold text-blue-600 dark:text-blue-400">{{ total }}</span>

                        </p>
                    </div>
                    <div class="w-full flex justify-center px-4 sm:px-0">
                        <nav v-if="props.items.meta" class="isolate inline-flex flex-wrap justify-center gap-1 sm:gap-2"
                            aria-label="Pagination">
                            <Link v-for="page in props.items.meta.links" :key="page.label" :href="page.url || '#'"
                                preserve-scroll preserve-state :class="[
                                    'relative inline-flex items-center px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200',
                                    page.active ? 'z-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:from-blue-600 hover:to-blue-700' :
                                        'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700',
                                    !page.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md',
                                    'rounded-lg transform hover:-translate-y-0.5'
                                ]" :disabled="!page.url">
                            <template v-if="page.label.includes('Previous')">
                                <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                        clip-rule="evenodd" />
                                </svg>
                            </template>
                            <template v-else-if="page.label.includes('Next')">
                                <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clip-rule="evenodd" />
                                </svg>
                            </template>
                            <template v-else>{{ page.label }}</template>
                            </Link>
                        </nav>

                        <nav v-else class="isolate inline-flex flex-wrap justify-center gap-1 sm:gap-2"
                            aria-label="Pagination">
                            <Link v-for="page in props.items.links" :key="page.label" :href="page.url || '#'"
                                preserve-scroll preserve-state :class="[
                                    'relative inline-flex items-center px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200',
                                    page.active ? 'z-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:from-blue-600 hover:to-blue-700' :
                                        'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700',
                                    !page.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md',
                                    'rounded-lg transform hover:-translate-y-0.5'
                                ]" :disabled="!page.url">
                            <template v-if="page.label.includes('Previous')">
                                <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                        clip-rule="evenodd" />
                                </svg>
                            </template>
                            <template v-else-if="page.label.includes('Next')">
                                <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clip-rule="evenodd" />
                                </svg>
                            </template>
                            <template v-else>{{ page.label }}</template>
                            </Link>
                        </nav>
                    </div>
                    <div class="w-full sm:w-48 flex items-center gap-2">
                        <label class="text-gray-700 dark:text-gray-300 font-medium">Show:</label>
                        <select v-model="perPage" @change="updatePerPage" class="flex-1 rounded-lg border-2 border-gray-300 bg-white dark:bg-gray-800
                            text-gray-700 dark:text-gray-100 px-4 py-2
                            shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out
                            focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
                            dark:border-gray-600 dark:hover:border-blue-400
                            appearance-none bg-no-repeat bg-right
                            cursor-pointer hover:-translate-y-0.5 transform
                            bg-gradient-to-r from-white to-gray-50
                            dark:from-gray-800 dark:to-gray-700
                            font-medium">
                            <option value="10" class="py-2 px-4 hover:bg-blue-50 dark:hover:bg-gray-700">10 items
                            </option>
                            <option value="25" class="py-2 px-4 hover:bg-blue-50 dark:hover:bg-gray-700">25 items
                            </option>
                            <option value="50" class="py-2 px-4 hover:bg-blue-50 dark:hover:bg-gray-700">50 items
                            </option>
                            <option value="100" class="py-2 px-4 hover:bg-blue-50 dark:hover:bg-gray-700">100 items
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="../dist/index.css" scoped></style>
