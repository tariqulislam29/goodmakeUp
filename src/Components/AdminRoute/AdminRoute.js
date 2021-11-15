import React from 'react';
import { CircularProgress } from '@mui/material';

import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    let { user, isLoading, admin } = useAuth();
    if (isLoading) {
        if (isLoading) { return <CircularProgress /> }

    }
    return (

        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>

    );
};

export default AdminRoute;