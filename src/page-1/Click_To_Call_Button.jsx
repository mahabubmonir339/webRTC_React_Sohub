import React from 'react';
import { Link } from 'react-router-dom';

function Click_To_Call_Button() {

    return (
        <div>
            <section className=''>
                <br /><br />
                <h3 className='text-4xl'>Widgets for calls from your website</h3> <br /><br />
                <div className='bg-white'>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium select">
                            Website requirements
                        </div>
                        <div className="collapse-content">
                            <p>In order for the widget to work your website needs to have a security certificate and open using secure https protocol. The widget works in most up to date browsers that support webrtc.</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium select">
                            Terms of free use
                        </div>
                        <div className="collapse-content">
                            <p>You can create up to 5 widgets.

                                For the widget to work for free you need to top up your account balance regularly (at least once in three months). If you account balance is not topped up in over 3 months, the cost of widget will be $2 for 30 days.

                                You can always disable the widget without deleting it, in this scenario the widget will not appear on your website and it will not be charged for.</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium select">
                            Design
                        </div>
                        <div className="collapse-content">
                            <p>You can change the design of the widget button when editing it in “Widget style” section, including changing the design for each step of the call – ringing, the call and ending the call.</p>
                        </div>
                    </div>
                </div>
                <br />
                <h3 className='text-2xl'>Widget example</h3>
                <br />
                <Link to='/create_widget'><button className="btn btn-warning">CREATE WIDGET</button></Link>
            </section>
            <br /><br />
        </div>
    );
}

export default Click_To_Call_Button;