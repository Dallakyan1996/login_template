import React from 'react'
import DataTable from "react-data-table-component";
import 'react-data-table-component-extensions/dist/index.css';
import DataTableExtensions from 'react-data-table-component-extensions';

const customStyles = {
    headCells: {
        style: {
            backgroundColor: "#c1dbef",
            fontSize: "15px"
        },
    },
    cells: {
        style: {
            fontSize: '12px',
            borderStyle: "solid",
            borderColor: "rgba(0,0,0,.12)",
            borderWidth: "1px"
        },
    },
};

const Table = () => {
    const { useState } = React;
    const [columns, setColumns] = useState([
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "Surname",
            selector: row => row.surname,
            sortable: true,
        },
        {
            name: "Birth Year",
            selector: row => row.birthYear,
            sortable: true,
        },
        {
            name: "Birth City",
            selector: row => row.birthCity,
            sortable: true,
        }
    ]);

    const [data, setData] = useState([
        { name: 'James', surname: 'Bond', birthYear: 1987, birthCity: "New York" },
        { name: 'Joe', surname: 'Smith', birthYear: 2017, birthCity: "Madrid" },
        { name: 'Jackie', surname: 'Chan', birthYear: 1987, birthCity: "London" },
        { name: 'Mark', surname: 'Dacascos', birthYear: 2017, birthCity: "Yerevan" },
        { name: 'Leonel', surname: 'Messi', birthYear: 1987, birthCity: "Barcelona" },
        { name: 'Silvester', surname: 'Stalone', birthYear: 2017, birthCity: "Brazil" }
    ]);
    const tableData = {
        columns,
        data
    };

    return (
        <DataTableExtensions
            search
            print={false}
            export={false}
            {...tableData}
        >
            <DataTable
                noHeader
                expand={true}
                title=""
                columns={columns}
                data={data}
                customStyles={customStyles}
                Clicked
            />
        </DataTableExtensions>
    )
}

export default Table;