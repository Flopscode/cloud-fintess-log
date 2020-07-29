import React, { FC, Fragment } from 'react';
import { WeightLog, WeightLogEntry } from 'weight-domain';
import { useIntl } from 'react-intl';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export interface WeightLogListProps {
    weightLog: WeightLog;
    listWrapperComponent?: React.ElementType;
}

const WeightLogList:FC<WeightLogListProps> = (props) => {
    const { weightLog, listWrapperComponent } = props
    const intl = useIntl();

    // TODO edit entry
    // TODO delete entry
    // TODO pagination
    // TODO sort
    // https://material-ui.com/components/tables/#table
    return (
        <TableContainer component={listWrapperComponent || Fragment}>
            <Table
                // className={classes.table}
                size="small"
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Weight</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {weightLog.entries.map((entry: WeightLogEntry) => (
                        <TableRow key={entry.id}>
                            <TableCell component="th" scope="row">
                                {intl.formatDate(entry.date)}
                            </TableCell>
                            <TableCell align="right">
                                {Number(entry.weight).toFixed(1)} {entry.unit}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default React.memo(WeightLogList);