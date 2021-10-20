import React from 'react';
import './Appointment.css'

const Appointment = () => {
    return (
        <div>
            <div className="appointment__container py-10 text-left">
                {/* appointment form */}
                <div className="container">
                    <form>
                        <label className="fw-bolder" htmlFor="fname">First Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name.." />

                        <label className="fw-bolder" htmlFor="number">Mobile No.</label>
                        <input type="number" id="number" name="number" placeholder="Your Mobile No.." />

                        <label className="fw-bolder" htmlFor="specialist">Specialist Name</label>
                        <select id="specialist" name="specialist">
                            <option value="darlin">Dr. Darlin Mandosa</option>
                            <option value="rodik">Dr. Rodik Anderson</option>
                            <option value="julia">Dr. Julia Jame</option>
                            <option value="mark">Dr. Mark Norick</option>
                            <option value="erik">Dr. Erik Madson</option>
                            <option value="mazy">Dr. Mazy Mony</option>
                        </select>

                        <label className="fw-bolder" htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" />

                        <input className="mt-3" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;