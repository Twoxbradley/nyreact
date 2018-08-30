// Import React
import React from 'react';

// Import the Jumbotron UI component from the reactstrap framework.
import { Jumbotron } from 'reactstrap';

// Import Jumbotron style sheet.
import './Jumbotron.css';

// Jumbotron component
const NYTJumbotron = (props) => {
    return (
        <div className="header">
            <Jumbotron className="text-center jumbotron">
                <h1 className="display-3">New York Times Article Scrubber</h1>
                <p className="lead">Search for and annotate articles of interest</p>
            </Jumbotron>
        </div>
    );
};

// Export Jumbotron component.
export default NYTJumbotron;

