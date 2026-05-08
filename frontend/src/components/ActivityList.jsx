function ActivityList({ activities}) {
    return (
        <div>
            <h2>Activities</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Activity</th>
                        <th>Hours</th>
                    </tr>
                </thead>
                <tboady>
                    {activities.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.activity}</td>
                            <td>{item.hours}</td>
                        </tr>
                    ))}
                </tboady>
            </table>
        </div>
    )
}
export default ActivityList;