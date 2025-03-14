import { useState } from "react";
import { db } from '../config/firebase-config';
import { ref, push } from 'firebase/database';
import { validateFeedback } from "../utils/validate";

function FeedbackForm() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [region, setRegion] = useState('Masai Mara');


const handleSubmit = (e) => {
    e.preventDefault();
    const parsedRating = parseInt(rating);
    if(!validateFeedback(parsedRating, comment, region)){
        alert('Invalid input ! Rating must be 1-5, comment max 200 characters, region must be valid.');
        return;
    }


    push(ref(db, 'feedback'), {
        rating: parsedRating,
        comment,
        region,
        timestamp: Date.now()
    });
    alert('Thanks for your feedback!');
    setRating(0);
    setComment('');
};

return(
    <form onSubmit  ={handleSubmit}>
        <h2></h2>  
        <label>
            Rating:
            <select value = {rating} onChange = {(e) => setRating(e.target.value)} >
                <option value = "0">Select</option>
                {[1,2,3,4,5].map(n =>(
                    <option key = {n} value = {n}>{n}</option>
                ))}
            </select>
        </label>
        <label>
            Comment:
            <input 
                type = "text"
                value = {comment}
                onChange = {(e) => setComment(e.target.value)}
                maxLength= "200"
                placeholder="Tell us more..."
            />
        </label>
        <label>
            Region:
            <select value = {region} onChange = {(e) => setRegion(e.target.value)}>
                <option value = "Masai Mara">Masai Mara</option>
                <option value = "Amboseli">Amboseli</option>
                <option value = "Tsavo East">Tsavo East</option>
                <option value = "Samburu">Samburu</option>
                <option value = "Nairobi">Nairobi</option>
            </select>
        </label>
        <button type= "submit"> Submit</button>
    </form>
);
}

export default FeedbackForm;