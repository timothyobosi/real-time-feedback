export const validateFeedback = (rating, comment, region) =>{
    if(rating < 1 || rating > 5) return false;//must be1-5
    if(comment.length > 200) return false;//max 200 characters
    if(!['Masai Mara', 'Amboseli', 'Tsavo East', 'Samburu', 'Nairobi'].includes(region)) return false;//must be one of the regions
    return true;
};