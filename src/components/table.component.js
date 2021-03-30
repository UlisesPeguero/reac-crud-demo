import React from 'react';
import Axios from 'axios';


function TableHead(props) {
    return (
        <thead className="bg-dark text-light text-center">
            <tr>
            {
                props.headers.map(header => {
                    return (
                        <th key={ header } className="border p-2 text-center"> {header} </th>
                    );
                })
            }
            </tr>
        </thead>
    );
}

function TableRow(props) {
    return (
        <tr>
            <TableData value={props.student.firstName} />
            <TableData value={props.student.lastName} />
            <TableData value={props.student.email} />
            <TableData value={props.student.program} />
            <TableData>
                <button>Meows</button>
            </TableData>
        </tr>
    );
}

function TableData(props) {
    return (
        <td
            className="p-2 border">
            {props.value || props.children}
        </td>
    );
}

class DataTable extends React.Component {

    constructor(props) {
        super(props);
        this.apiUrl = 'https://crud-demo-skc.herokuapp.com';
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        Axios.get(this.apiUrl + '/students')
            .then(response => {
                this.setState({
                    data: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <table className="w-100 border bg-light">
                <TableHead headers={['First name', 'Last name', 'Email', 'Program', 'Options']} />
                <tbody>
                    {
                        this.state.data.map(student => {
                            return <TableRow key={student._id} student={student} />
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export { DataTable, TableHead, TableRow, TableData };