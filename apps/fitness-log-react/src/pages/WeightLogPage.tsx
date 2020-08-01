import React, { FC } from 'react';
import WeightLogChart from '../components/weight/WeightChart';
import WeightLogList from '../components/weight/WeightLogList';
import { WeightLog, WeightUnit } from 'weight-domain';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';

function generateData() {
    const weightLog: WeightLog = {
        entries: [],
    };

    for (let i: number = 1; i < 32; i++) {
        const day = ('' + i).padStart(2, '0');
        weightLog.entries.push({
            id: `${i}`,
            weight: Math.random() * 100,
            date: `2020-01-${day}`,
            unit: WeightUnit.kg,
        });
    }

    return weightLog;
}

export interface WeightLogPageProps {
}

const WeightLogPage:FC<WeightLogPageProps> = (props) => {
    return (
        <Container>
            <h1
                className="default-page-margin"
            >Weight Log</h1>
            Test Text
            <WeightLogChart
                weightLog={generateData()}
            />
            <h2>Entries</h2>
            <WeightLogList
                weightLog={generateData()}
                listWrapperComponent={Paper}
            />
            <div className="fab-bottom-space-blocker" />
            <div className="fab">
                {/*// TODO useStyle instead? but how offload css?*/}
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </div>
        </Container>
    );
};

export default WeightLogPage;
