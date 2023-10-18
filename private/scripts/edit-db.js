const _supabase = supabase.createClient(process.env.DATABASE_URL, process.env.SUPABASE_SERVICE_API_KEY);


// Function to fetch data from Supabase and populate the table
async function fetchAndPopulateTable() {
    const { data, error } = await _supabase.from('kids').select('*');
    if (error) {
        console.error(error);
        return;
    }

    const table = document.getElementById('editableTable');
    // Clear existing table content
    table.innerHTML = '';

    // Create table header
    const headerRow = table.insertRow();
    for (const key in data[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    }

    // Populate table rows
    data.forEach(rowData => {
        const row = table.insertRow();
        for (const key in rowData) {
            const cell = row.insertCell();
            cell.textContent = rowData[key];
        }
    });
}

// Function to add a new row
async function addRow() {
    const { data, error } = await _supabase.from('your_table_name').insert([{}]);
    if (error) {
        console.error(error);
        return;
    }

    // Fetch and populate the updated table
    fetchAndPopulateTable();
}

// Function to delete the last row
async function deleteRow() {
    const { data, error } = await _supabase.from('your_table_name').delete({ returning: 'minimal' }).single();
    if (error) {
        console.error(error);
        return;
    }

    // Fetch and populate the updated table
    fetchAndPopulateTable();
}


// Fetch and populate the table when the page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchAndPopulateTable();
});


document.addEventListener('click', e => {
    if (e.target.id === 'btn-add-row') {
        addRow();
    } else if (e.target.id === 'btn-delete-row') {
        deleteRow();
    }
});



// Inserting Data:
// Single Kid with Single Parent:

// Insert a new kid record.
// Insert a new parent record.
// Insert a record in the Parent_Kid table linking the kid and the parent.
// Multiple Parents for a Kid:

// Insert a new parent record for each additional parent.
// Insert records in the Parent_Kid table linking the existing kid with each new parent.
// Multiple Kids with Single Parent:

// Insert a new parent record.
// Insert a new kid record for each additional kid.
// Insert records in the Parent_Kid table linking the parent with each new kid.
// Editing Data:
// Adding Additional Parent:

// Insert a new parent record.
// Insert a record in the Parent_Kid table linking the existing kid with the new parent.
// Adding Additional Kid:

// Insert a new kid record.
// Insert a record in the Parent_Kid table linking the existing parent with the new kid.
// Editing Existing Data:

// Update the relevant records in the Kids, Parents, or Parent_Kid tables as needed.