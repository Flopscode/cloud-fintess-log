import React, { FC } from 'react';
import { WeightLog, WeightLogEntry } from 'weight-domain';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  SplineSeries,
  ScatterSeries,
  ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { scaleTime } from 'd3-scale';

const WEIGHT_DATA_KEY = 'weight'
const DATE_DATA_KEY = 'date'

const weightPointOptions = { size: 7 };

export interface WeightLogChartProps {
    weightLog: WeightLog;
}

const SplinePoint = (props: any) => (
    <ScatterSeries.Point
        point={weightPointOptions}
        {...props}
    />
);

const SplineWithPoint = (props: any) => (
    <>
        <SplineSeries.Path
            {...props}
        />
        <ScatterSeries.Path
            {...props}
            pointComponent={SplinePoint}
        />
    </>
);

const WeightLogChart:FC<WeightLogChartProps> = (props) => {
    const { weightLog } = props;
    const chartWeightData = convertWeightLogToWeightChartData(weightLog)

    return (
        <Chart
            data={chartWeightData}
            height={300} // TODO height = half screen height?
        >
            <ArgumentScale
                factory={scaleTime}
            />
            <ArgumentAxis

            />
            <ValueAxis />
            <SplineSeries
                valueField={WEIGHT_DATA_KEY}
                argumentField={DATE_DATA_KEY}
                seriesComponent={SplineWithPoint}
            />
            <Animation />
            <ZoomAndPan
                interactionWithArguments="both"
            />
        </Chart>
    );
};

export default React.memo(WeightLogChart);

function convertWeightLogToWeightChartData(weightLog: WeightLog) {
    return weightLog.entries.map((entry: WeightLogEntry) => ({
        [WEIGHT_DATA_KEY]: entry.weight,
        [DATE_DATA_KEY]: new Date(entry.date),
    }))
}