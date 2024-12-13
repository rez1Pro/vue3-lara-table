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

## Basic Usage

```
<template>
<LaraTable
:columns="columns"
:data-url="/api/users"
:per-page="10"
/>
</template>
<script setup>
import { LaraTable } from 'vue3-lara-table'
const columns = [
{
key: 'id',
label: 'ID',
sortable: true
},
{
key: 'name',
label: 'Name',
sortable: true
},
{
key: 'email',
label: 'Email'
}
]
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

