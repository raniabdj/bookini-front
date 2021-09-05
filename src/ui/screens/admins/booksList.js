import React, {useCallback, useEffect, useRef, useState} from 'react'
import {DataGrid, GridToolbar} from '@material-ui/data-grid';
import {useDispatch, useSelector} from "react-redux";
import {loadBooksAsync} from "../../../store/reducers/books/books.thunk";
import {makeStyles} from "@material-ui/styles";
import CustomNoRowsOverlay from "../../components/screens/customOverlayDataGrid";
import color from "color";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        '& .MuiDataGrid-columnsContainer': {
            // background: 'linear-gradient(154deg, rgba(131,58,180,1) 0%, rgb(253 29 128) 50%, rgb(69 252 193) 100%)'
            borderBottom: 'outset'
        },
        '& .MuiDataGrid-toolbarContainer': {
            background: 'linear-gradient(154deg, rgba(131,58,180,1) 0%, rgb(253 29 128) 50%, rgb(69 252 193) 100%)',
            display: 'flex',
            padding: '16px 8px 17px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            '& .css-1knaqv7-MuiButtonBase-root-MuiButton-root': {
                color: 'white'
            }
        },
    },
});

export default function BookList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {isLoading, books, errorMessage} = useSelector((state) => state.books);
    const [rows, setRows] = useState(books)
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(5)


    useEffect(() => {
        dispatch(loadBooksAsync(0, limit))
        console.log(books)
    }, []);

    const handleNextPae = (newPage) => {
        setPage(newPage)
        console.log(newPage, page)
        dispatch(loadBooksAsync(newPage, limit))
        console.log(books)
    }

    const columns = [
        {field: 'id', flex: 0.3,},
        {field: 'title', flex: 1,},
        {field: 'author', flex: 1,},
        {field: 'copies', flex: 0.4,},
        {field: 'action', flex: 0.4,renderCell:(row)=><Button>update{row['id']}</Button>},
    ]
    return (
        <div style={{height: '100%'}}>
            {errorMessage && <h3>{errorMessage}</h3>}
            <div style={{height: '400px'}} className={classes.root}>
                <DataGrid
                    columns={columns}
                    rows={books ? books : []}
                    page={page}
                    loading={isLoading}
                    // autoHeight={false}
                    pageSize={limit}
                    rowCount={books.length + 1}
                    pagination
                    rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    onPageChange={(newPage) => handleNextPae(newPage)}
                    onPageSizeChange={(newLimit) => setLimit(newLimit)}
                    components={{
                        Toolbar: GridToolbar,
                        NoRowsOverlay: CustomNoRowsOverlay,
                    }}
                />
            </div>

        </div>
    )
}