import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LineController,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    PointElement,
    LineController,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

function ChartComponent(props) {
    if (!props.data || !props.options) {
        return (
            <div className="p-4 bg-red-100 text-red-500 rounded-lg">
                Error: Missing data or options for the chart.
            </div>
        );
    }

    return (
        <div className="p-6 bg-white border-4 border-indigo-500 rounded-lg shadow-lg" style={{ height: '100%', width: '100%' }}>
            <Line data={props.data} options={props.options} />
        </div>
    );
}

export default ChartComponent;