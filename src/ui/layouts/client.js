import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Stack from '@material-ui/core/Stack';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {MenuBook} from "@material-ui/icons";
import {Avatar, Pagination, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {bookBooksAsync, loadBooksAsync} from "../../store/reducers/books/books.thunk";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://ikwb.com/">
                ikbalwb.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



export default function ClientLayout() {

    const dispatch = useDispatch();
    const {isLoading, books, errorMessage} = useSelector((state) => state.books);
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [limit, setLimit] = useState(10)
    useEffect(() => {
        dispatch(loadBooksAsync(page-1, limit))
        console.log(books)
    }, [page]);

    const handleChange = (e,newPage) => {
        console.log(newPage)
      setPage(newPage)
    }
    const handleBooking = (id) => {
        console.log(id)
        // var books.filter(val=>val.id===id)
        dispatch(bookBooksAsync(id))
    }
    const onSearchChange = (e) => {
      setSearch(e.target.value)

    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <MenuBook sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Bookini
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            WelCome In
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Here you can finde any book you want
                            don&apos;t simply skip over it entirely.
                            any book we can provide it for you
                        </Typography>
                        <Box
                            sx={{
                                width: 600,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField
                                value={search}
                                onChange={onSearchChange}
                                fullWidth label="search for a book" id="fullWidth" />
                        </Box>


                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>

                        {books.filter(item => item['title'] && item['title'].toLowerCase().includes(search.toLowerCase())).map((card,index) => (
                            console.log((page-1)*limit,page*limit),
                            Number(card.id)>=(page-1)*limit && Number(card.id)<page*limit?
                            <Grid item key={card._id}  xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/800px-Books_HD_%288314929977%29.jpg"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {card.author}

                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{display:'flex',justifyContent: 'space-between'}}>
                                        <Button variant="contained" color='primary' onClick={()=>handleBooking(card._id)} size="small">Book one</Button>
                                        <Avatar>{card.copies}</Avatar>
                                    </CardActions>
                                </Card>
                            </Grid>:null
                        ))}
                    </Grid>
                    <Box maxWidth="md" style={{
                        margin: '50px 10px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography>Page: {page}</Typography>
                        <Pagination count={limit} page={page} onChange={handleChange} />
                    </Box>

                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

                <Typography variant="h6" align="center" gutterBottom>
                    Bookini
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    bookini.com
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </React.Fragment>
    );
}