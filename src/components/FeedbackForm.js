import { validateFeedback } from "../utils/validate";

const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateFeedback(rating, comment, region)){
        alert('Invalid input');
        return;
    }
    push(ref(dblClick, 'feedback', {rating, comment, region, timestamp: Date.now()}));
    alert('Thanks for your feedback!');
    setRating(0);
    setComment('');
};