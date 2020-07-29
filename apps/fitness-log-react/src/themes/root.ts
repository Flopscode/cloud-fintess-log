import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        // primary: {
        //     main: "#00B482"
        // },
        // secondary: {
        //     main: "#f2f2f2"
        // },
        // accent: {
        //     main: "#711E82"
        // }
    },
    // status: {
    //     danger: 'red',
    // },
    typography: {
        fontFamily: [
            'Arial',
            'Roboto',
            'Helvetica',
            'Open Sans',
            'sans-serif'
        ].join(',')
    }
});
