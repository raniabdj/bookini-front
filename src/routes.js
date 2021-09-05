import {Book, Tv} from "@material-ui/icons";
import BookList from "./ui/screens/admins/booksList";
import ProfileAdmin from "./ui/screens/admins/profile";
import BooksFormeField from "./ui/screens/admins/booksFormField";

const routes = [

    {
        path: "/books",
        name: "Books List",
        icon: <Book/>,
        iconColor: "Primary",
        component: BookList,
        layout: "/admin",
    },
    {
        path: "/",
        name: "Profile",
        icon: <Tv/>,
        iconColor: "Primary",
        component: ProfileAdmin,
        layout: "/admin",
    },
    {
        path: "/newbook",
        name: "Add New Book",
        icon: <Tv/>,
        iconColor: "Primary",
        component: BooksFormeField,
        layout: "/admin",
    },

    // {
    //     divider: true,
    // },
];
export default routes;