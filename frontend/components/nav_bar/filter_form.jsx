import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ minSeating, maxSeating, updateFilter }) => (
    <div>
        
    </div>
)