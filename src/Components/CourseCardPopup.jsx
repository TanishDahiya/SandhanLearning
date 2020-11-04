import React from 'react'
import './course-card-popup.css'

class CourseCardPopup extends React.Component
{
    render()
    {
        return(
        <>
            <figure class="card-popup">
                <img src="https://i.pinimg.com/originals/fe/45/86/fe4586e100b6772e65c12a95048803ae.jpg" alt="sample88" />
                <figcaption>
                    <h2>Walkin Placement Training</h2>
                    <p>3 Months training program with job orientation for pass out students or students who are looking for better jobs.</p>
                    <a href="https://drive.google.com/drive/folders/1egrh14lbIvjjcfuHtdY-MUDzHCLjV6qc" class="read-more">Learn More</a>
                </figcaption>
            </figure>
        </>
        )
    }
}

export default CourseCardPopup;