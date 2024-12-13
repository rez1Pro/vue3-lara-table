<script setup lang="ts">
import { PaginatedResponse, TableColumn } from '@/types/allType';
import { Link, router } from '@inertiajs/vue3';
import { computed, ref, watch } from 'vue';
// Update TableItem to be more flexible
type TableItem = Record<string, any>;

// Add emits definition

// Add search prop with default value
const props = defineProps<{
    items: PaginatedResponse<TableItem>;
    columns: TableColumn[];
    searchPlaceholder?: string;
    searchKey: string;
}>();

// Add debounce timeout ref
const searchTimeout = ref<number | null>(null);

const filterKey = computed(() => `filter[${props.searchKey}]` || 'filter[search]');

const search = ref<string>(route().params.filter?.search as any || '');

watch(search, (value: string) => {
    if (searchTimeout.value) {
        clearTimeout(searchTimeout.value);
    }

    searchTimeout.value = setTimeout(() => {
        router.get(props.items.meta.path, {
            [filterKey.value]: value
        }, {
            preserveScroll: true,
            preserveState: true
        });
    }, 300) as unknown as number;
});


// Update computed properties to use paginated data
const paginatedItems = computed(() => props.items.data);
const from = computed(() => props.items.meta.from);
const to = computed(() => props.items.meta.to);
const total = computed(() => props.items.meta.total);

</script>

<template>
    <div class="bg-white dark:bg-gray-800 overflow-hidden sm:rounded-lg">
        <div class="p-6">
            <!-- Add search input -->
            <div class="mb-4">
                <input type="text"
                    class="w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    :placeholder="searchPlaceholder ?? 'Search...'" v-model="search">
            </div>

            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th v-for="column in columns" :key="column.key" scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                :style="column.width ? { width: column.width } : {}">
                                {{ column.label }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="item in paginatedItems" :key="item.id || item[columns[0].key]"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td v-for="column in columns" :key="column.key"
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                <!-- Check for slot existence and render accordingly -->
                                <slot v-if="$slots[column.key]" :name="column.key" :item="item"></slot>
                                <template v-else>
                                    {{ item[column.key] }}
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-4 flex items-center justify-between">
                <div class="flex-1 flex justify-between sm:hidden">
                    <Link v-if="props.items.links.prev" :href="props.items.links.prev"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Previous
                    </Link>
                    <Link v-if="props.items.links.next" :href="props.items.links.next"
                        class="relative ml-3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Next
                    </Link>
                </div>
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm text-gray-700 dark:text-gray-300">
                            Showing
                            <span class="font-medium">{{ from }}</span>
                            to
                            <span class="font-medium">{{ to }}</span>
                            of
                            <span class="font-medium">{{ total }}</span>
                            results
                        </p>
                    </div>
                    <div>
                        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <Link v-for="page in props.items.meta.links" :key="page.label" :href="page.url || '#'"
                                preserve-scroll preserve-state :class="[
                                    'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium',
                                    page.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                ]" v-html="page.label">
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>