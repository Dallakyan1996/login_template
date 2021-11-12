import React from 'react'
import DataTable from "react-data-table-component";
import 'react-data-table-component-extensions/dist/index.css';
import DataTableExtensions from 'react-data-table-component-extensions';
// import { forwardRef } from 'react';
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import ViewColumn from '@material-ui/icons/ViewColumn';
// import MaterialTable from 'material-table';

import { FaSearch, FaSnowflake, FaSpider, FaTableTennis } from "react-icons/fa";

// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <BiArchiveIn {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FaSearch {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <FaSearch {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };

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

const MatTable = () => {
    const { useState } = React;
    const [columns, setColumns] = useState([
        {
            name: "Name",
            selector: "name",
            sortable: true,
        },
        {
            name: "Surname",
            selector: "surname",
            sortable: true,
        },
        {
            name: "Birth Year",
            selector: "birthYear",
            sortable: true,
        },
        {
            name: "Birth City",
            selector: "birthCity",
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
        data,
    };
    return (
        // <MaterialTable
        //     title="Actors"
        //     icons={tableIcons}
        //     columns={columns}
        //     data={data}
        //     options={{
        //         headerStyle: {
        //             backgroundColor: '#c1dbef',
        //             height: "0.2rem",
        //             fontSize: '15px',
        //             color: "black"
        //         },
        //         draggable: false,
        //         isFreeAction: true,
        //         filtering: false,
        //         paging: false,
        //         exportButton: true
        //     }}
        // />
        <DataTableExtensions
            search
            print={true}
            export={true}
            {...tableData}
        >
            <DataTable
                noHeader
                title=""
                columns={columns}
                data={data}
                customStyles={customStyles}
                Clicked
            />
        </DataTableExtensions>
    )
}

export default MatTable;