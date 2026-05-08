import { useState } from 'react';
import { addActivity } from '../api';

function ActivityForm({ refreshActivities, refreshSummary }) {
    const [formData, setFormData] = useState({
        name: '',
        activity: '',
        hours: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addActivity(formData);

            alert('Activity Added Successfully');

            setFormData({
                name: '',
                activity: '',
                hours: ''
            });

            refreshActivities();
            refreshSummary();

        } catch (error) {
            console.error(error);
            alert('Error adding activity');
        }
    };

    return (
        <div>
            <h2>Add Activity</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="activity"
                    placeholder="Activity"
                    value={formData.activity}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="hours"
                    placeholder="Hours"
                    value={formData.hours}
                    onChange={handleChange}
                />

                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}

export default ActivityForm;