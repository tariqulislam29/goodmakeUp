import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import AddProduct from './AddProduct/AddProduct';
import WelcomePage from './WelcomePage/WelcomePage';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Reviews from './Reviews/Reviews';
import MyOrders from './MyOrders/MyOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import Pay from './Pay/Pay';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';



const drawerWidth = 200;
const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout, user } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Link to={`${url}`} className="text-decoration-none text-light bg-dark d-flex justify-content-center"><Button className="makeup-text">Dashboard</Button></Link>
            <Divider />

            <Divider />
            {
                !admin && <Box>
                    <Link to={`${url}/myorders`} className="text-decoration-none text-light bg-dark  d-flex justify-content-center"><Button className="makeup-text">My Orders</Button></Link>
                    <Divider />
                    <Link to={`${url}/pay`} className="text-decoration-none text-light bg-dark  d-flex justify-content-center"><Button className="makeup-text">Pay</Button></Link>
                    <Divider />
                    <Link to={`${url}/reviews`} className="text-decoration-none text-light bg-dark  d-flex justify-content-center"><Button className="makeup-text">Reviews</Button></Link>
                    <Divider />
                </Box>
            }

            {
                admin && <Box>
                    <Link to={`${url}/manageproducts`} className="text-decoration-none text-light bg-dark  d-flex justify-content-center"><Button className="makeup-text">Manage Products</Button></Link>
                    <Divider />
                    <Link to={`${url}/manageorders`} className="text-decoration-none text-light bg-dark  d-flex justify-content-center"><Button className="makeup-text">Manage All Orders</Button></Link>
                    <Divider />
                    <Link to={`${url}/addproduct`} className="text-decoration-none text-light bg-dark  d-flex justify-content-center"><Button className="makeup-text">Add Product</Button></Link>
                    <Divider />
                    <Link to={`${url}/makeadmin`} className="text-decoration-none text-light bg-dark  d-flex justify-content-center"><Button className="makeup-text">Make Admin</Button></Link>
                </Box>
            }
            <Divider />
            <Typography className=" bg-dark  d-flex justify-content-center" >

                <Link to="/home" className="text-decoration-none "> <Button onClick={logout} className="text-light makeup-text" >LogOut</Button></Link>
            </Typography>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: `black`,
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" className="makeup-text">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" noWrap component="div" sx={{ marginRight: 'auto', marginLeft: '10px', color: '#fab1a0', border: '1px solid white', padding: '5px 10px', fontSize: '12px' }}>
                        {user.displayName}
                    </Typography>

                    <Typography variant="h6" noWrap component="div" sx={{ marginLeft: 'auto' }}>
                        <Link to="/home" className="text-decoration-none makeup-text">   Home</Link>
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <WelcomePage></WelcomePage>
                    </Route>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};



export default Dashboard;