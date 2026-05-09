
import { deleteActivity } from "../api";
// import {refreshActivities} from '../App';
function ActivityList({ activities, refreshActivities }) {
    const handleDelete = async (id) => {
        console.log("DELETE CLICKED", id);
        await deleteActivity(id);

        refreshActivities();
    };
    return (
        <div>

            <h2>Activities</h2>

            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Activity</th>
                        <th>Hours</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {activities.map((item) => (

                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.activity}</td>
                            <td>{item.hours}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ActivityList;