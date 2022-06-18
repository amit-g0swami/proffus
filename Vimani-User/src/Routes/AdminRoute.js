import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authAdmin } from "../actions/Admin";

const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                authAdmin() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/adminlogin",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
