import { useEffect, useState } from 'react';
import { getActivities, getSummary } from './api';

import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';
import Summary from './components/Summary';

function App() {

    const [activities, setActivities] = useState([]);
    const [summary, setSummary] = useState({});

    const fetchActivities = async () => {
        try {
            const response = await getActivities();
            setActivities(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchSummary = async () => {
        try {
            const response = await getSummary();
            setSummary(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchActivities();
        fetchSummary();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Student Activity Tracker</h1>

            <ActivityForm
                refreshActivities={fetchActivities}
                refreshSummary={fetchSummary}
            />

            <Summary summary={summary} />

            <ActivityList
    activities={activities}
    refreshActivities={fetchActivities}
/>
        </div>
    );
}

export default App;