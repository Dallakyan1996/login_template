import React, { useState } from 'react'
import DataTable from "react-data-table-component";
import 'react-data-table-component-extensions/dist/index.css';
import LineChart from '../Charts/LineChart';

const customStyles = {
    headCells: {
        style: {
            backgroundColor: "#c1dbef",
            fontSize: "11px",
            fontWeight: "bold"
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

const LineChartTable = () => {
    const [count, setCount] = useState({
        a: null,
        b: null
    })


    const [columns, setColumns] = useState([
        {
            name: "Select",
            cell: (i) => <div>
                <input type="radio" className="checkBoxInput" name="selectRadio" onClick={(e) => {
                    setCount({
                        a: i.birthYear,
                        b: i.age
                    })
                }}
                />
            </div>
        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,

        },
        {
            name: "Surname",
            selector: row => row.age,
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
        {
            name: 'James',
            age: 205,
            birthYear: 555,
            birthCity: "New York"
        },
        {
            name: 'Joe',
            age: 190,
            birthYear: 2300,
            birthCity: "Madrid"
        },
        {
            name: 'Jackie',
            age: 1200,
            birthYear: 1600,
            birthCity: "London"
        },
        {
            name: 'Mark',
            age: 800,
            birthYear: 789,
            birthCity: "Yerevan"
        },
        {
            name: 'Leonel',
            age: 500,
            birthYear: 300,
            birthCity: "Barcelona"
        },
        {
            name: 'Silvester',
            age: 5000,
            birthYear: 12020,
            birthCity: "Brazil"
        }
    ]);
    const tableData = {
        columns,
        data
    };
    return (
        // <DataTableExtensions
        //     search
        //     print={true}
        //     export={true}
        //     {...tableData}
        // >
        <div className="lineChartWrapper">
            <div className="lineChartTable">
                <DataTable
                    noHeader
                    expand={true}
                    title=""
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                />
            </div>
            <div className="lineChart">
                <div className="subjectsCard">
                    <div className="cardHeader allSubjectsHeader">All Subjects</div>
                    <LineChart a={count.a} b={count.b} />
                </div>
            </div>
        </div>
        // </DataTableExtensions>
    )
}

export default LineChartTable;