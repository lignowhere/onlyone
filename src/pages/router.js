import Home from "./Home";
import Explore from './Explore'
import Creator from './Creator'
import Item from './Item'
import ItemDetails from './ItemDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import ConnectWallet from './ConnectWallet'
import CreateItem from './CreateItem'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'

const routes = [
    { path: '/', component: <Home />},
    { path: '/explore', component: <Explore />},
    { path: '/creator', component: <Creator />},
    { path: '/item', component: <Item />},
    { path: '/item-details', component: <ItemDetails />},
    { path: '/blog', component: <Blog />},
    { path: '/blog-details', component: <BlogDetails />},
    { path: '/connect-wallet', component: <ConnectWallet />},
    { path: '/create-item', component: <CreateItem />},
    { path: '/login', component: <Login />},
    { path: '/register', component: <Register />},
    { path: '/contact', component: <Contact />}
]

export default routes;