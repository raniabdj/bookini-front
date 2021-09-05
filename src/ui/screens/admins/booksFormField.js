import React, {useState} from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {addBooksAsync} from "../../../store/reducers/books/books.thunk";
import Swal from 'sweetalert2'


export default function BooksFormeField() {
    const dispatch = useDispatch();
    const {isLoading, success,books, errorMessage} = useSelector((state) => state.books);
    const [formInfo,setFormInfo] =useState({
        title: '',
        author: '',
        copies: '',
    })

   const handleChange =(e)=>{
        setFormInfo(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
   }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        dispatch(addBooksAsync(
            {
                title: data.get('title'),
                author: data.get('author'),
                copies: data.get('copies'),
            }
        ))
        if(success){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            }).then(value => {
                console.log(value)
                setFormInfo({
                    title: '',
                    author: '',
                    copies: '',
                })
            })
        }
    }
    return (
        <div>

            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">
                    Add New Book
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Book Title"
                        name="title"
                        autoFocus
                        value={formInfo.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="author"
                        label="Book Author Name"
                        name="author"
                        autoFocus
                        value={formInfo.author}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="copies"
                        label="Book Copies Number"
                        name="copies"
                        type="number"
                        autoFocus
                        value={formInfo.copies}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Add this book
                    </Button>

                </Box>
            </Box>
        </div>

    )
}