import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const ProReactRouterAuthComponent = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h3>SignUpForm</h3>
                    <form noValidate autoComplete="off" style={{ marginBottom: '30px' }}>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="Standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <h3>SignInForm</h3>
                </Grid>
            </Grid>
        </div>
    );
};

export default memo(ProReactRouterAuthComponent);
