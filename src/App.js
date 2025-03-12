import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/Dashboard';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<FeedbackForm />} />
        <Route path = "/dashboard" element = {<FeedbackList />}/>
      </Routes>
    </Router>
  );
}

export default App;