# Vue 3 Laravel Table

A flexible and customizable data table component for Vue 3 and Laravel applications, built specifically for Laravel pagination with Spatie/Query support for search functionality.

## Features

- Server-side pagination
- Sorting capabilities
- Customizable columns
- Search functionality
- Responsive design
- Laravel integration

## Installation

```
npm install vue3-lara-table
```

## Basic Usage

```vue
<template>
  <LaraTable :items="props.sendMessages" :columns="columns" search-key="search"
            search-placeholder="Search messages...">
            <template #status="{ item }">
                <span class="text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300" :class="{
                    'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300': item.status === 'Delivered',
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300': item.status === 'Pending',
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300': item.status === 'Failed',
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300': item.status === 'Sent'
                }">
                    {{ item.status }}
                </span>
            </template>
        </LaraTable>
</template>
<script setup>
const props = defineProps<{
    sendMessages: PaginatedResponse<SendMessageResource>;
}>();

const columns = ref<TableColumn[]>([
    {
        key: 'sender',
        label: 'Sender',
        width: '20%'
    },
    {
        key: 'receiver',
        label: 'Receiver',
        width: '20%'
    },
    {
        key: 'message',
        label: 'Message',
        width: '40%'
    },
    { key: 'status', label: 'Status', width: '20%' },
    { key: 'created_at', label: 'Sent At', width: '20%' },
    { key: 'delivered_at', label: 'Delivered At', width: '20%' }
]);
</script>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| columns | Array | Yes | - | Array of column definitions |
| dataUrl | String | Yes | - | API endpoint for fetching data |
| perPage | Number | No | 15 | Items per page |
| searchable | Boolean | No | false | Enable search functionality |
| sortable | Boolean | No | true | Enable sorting functionality |

## Column Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| key | String | Yes | Column identifier |
| label | String | Yes | Column header text |
| sortable | Boolean | No | Enable sorting for this column |
| formatter | Function | No | Custom formatter function |
| width | String | No | Column width (e.g., '100px', '10%') |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| page-changed | page | Emitted when page changes |
| sort-changed | { column, direction } | Emitted when sort changes |
| search-changed | searchQuery | Emitted when search query changes |

## Slots

The component provides several slots for customization:

- `header`: Custom header template
- `loading`: Custom loading state
- `empty`: Custom empty state
- `pagination`: Custom pagination controls
- `column-[key]`: Custom column template

## Example with Custom Templates

```vue
<template>
  <LaraTable :columns="columns" :data-url="/api/users">
    <template #column-actions="{ row }">
      <button @click="editUser(row)">Edit</button>
      <button @click="deleteUser(row)">Delete</button>
    </template>
    
    <template #empty>
      <div class="text-center">No data available</div>
    </template>
  </LaraTable>
</template>
```

## Laravel Backend Integration

Example Laravel controller:

```php
public function index(Request $request)
{
    $query = User::query();
    
    // Handle sorting
    if ($request->has('sort')) {
        $query->orderBy($request->sort, $request->direction ?? 'asc');
    }
    
    // Handle search
    if ($request->has('search')) {
        $query->where('name', 'like', "%{$request->search}%")
              ->orWhere('email', 'like', "%{$request->search}%");
    }
    
    return $query->paginate($request->per_page ?? 15);
}
```

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
```

This documentation provides a comprehensive overview of the component, including:
- Features
- Installation instructions
- Basic usage example
- Available props
- Column configuration
- Events and slots
- Example with custom templates
- Backend integration guide
- License and contribution information

You can customize this further based on your specific component implementation and additional features.

