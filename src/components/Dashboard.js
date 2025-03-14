import { useEffect, useState } from "react";
import { db } from '../config/firebase-config';
import { ref, onValue } from 'firebase/database';

function Dashboard() {
    const [feedbackList, setFeedbackList] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const feedbackRef = ref(db, 'feedback');
        onValue(feedbackRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.entries(data)
                .map(([id, f]) => ({ id, ...f }))
                .reverse();// Newest first
                setFeedbackList(list);
            }else{
                setFeedbackList([]);
            }            
            
        });
    }, []);

    const filterFeedback = filter === 'all'
    ? feedbackList
    : feedbackList.filter(f => f.rating <=2);

    return(
        <div className="dashboard">
            <h2></h2> 
            <button onClick = {() => setFilter('all')}>All Feedback </button>
            <button onClick = {() => setFilter('urgent')}>Urgent (≤ stars)</button>
            <ul>
                {filterFeedback.length> 0 ? (
                    filterFeedback.map(f => (
                        <li key={f.id} style={{color:f.rating <=2 ? 'red' : 'black'}}>
                            {f.rating} stars - {f.comment} ({f.region}) -{new Date(f.timestamp).toLocaleString()}                            
                        </li>
                    ))
                ) :(
                    <li>No feedback yet!</li>
                )}                
            </ul>
            <p>
                Total feedback: {feedbackList.length} | Avg Rating: 
                {(feedbackList.reduce((sum, f) => sum + f.rating, 0) / feedbackList.length || 0).toFixed(1)}
            </p>
        </div>        
    );
}

export default Dashboard;
