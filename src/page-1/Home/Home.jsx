import React from 'react';
import outGoingCall from '../../assets/img/home/phone-call-communication-svgrepo-com.svg';
import billing from '../../assets/img/home/billing-svgrepo-com.svg';
import vartual1 from '../../assets/img/home/dial-pad-svgrepo-com.svg';
import vartual2 from '../../assets/img/home/phone-mobile-user-svgrepo-com.svg';
import news from '../../assets/img/home/news-svgrepo-com.svg';
import statistic from '../../assets/img/home/statistics-svgrepo-com.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <section>
                <br />
                <h3 className='text-4xl'> Current Plan - Standard  </h3>
                <div className=''>
                    <br /><br />
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={outGoingCall} alt="Movie" style={{ width: "100px" }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Outgoing Calls</h2>
                                <p>SIP 358553: no active hardware</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">SETTINGS</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={billing} alt="Movie" style={{ width: "100px" }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Billing</h2>
                                <p>Your balance: $0.5</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">TOP UP</button>
                                </div>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={vartual1} alt="Movie" style={{ width: "150px", height: "100px" }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Virtual Phone Numbers</h2>
                                <p>30 000 numbers in 150 cities around the world are available for fast connection</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">PLACE ORDER</button>
                                </div>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={vartual2} alt="Movie" style={{ width: "100px" }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Virtual Phone System</h2>
                                <p>Free cloud PBX with voice menu / greeting,
                                    call recording, various call handling, etc.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">SET UP PBX</button>
                                </div>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={news} alt="Movie" style={{ width: "100px" }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">News</h2>
                                <p>Call centre features: supervisor mode and active employees</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">MORE NEWS</button>
                                </div>

                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={statistic} alt="Movie" style={{ width: "100px" }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Statistics</h2>
                                <p>Today's outgoing calls:</p>
                                <p>0:00</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">VIEW</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Link to='/click_to_call_button'><button className="text-end btn btn-sm btn-danger mx-5 m-8">Call Button</button></Link>

        </div>
    );
};

export default Home;