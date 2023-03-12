import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Widget_Integration = () => {
    const [value1, setValue1] = useState(`<div id="myZadarmaCallmeWidget13328"></div>
    <script>
      var myZadarmaCallmeWidget13328;
      var myZadarmaCallmeWidgetFn13328 = function() {
        myZadarmaCallmeWidget13328 = new ZadarmaCallmeWidget("myZadarmaCallmeWidget13328");
        myZadarmaCallmeWidget13328.create({
    "widgetId": "dA8taFUgpNX5u8czT5SRVC2j4JvzD6ra7kmhf4kt86bkLGr4vNHx1pgtcrRdss7A1kNbjmV9R6cKxZG924fda4gv21kk3nkk843c654b3c4f5126ecaeeaf2a6854bb4", "sipId":"358553", "domElement":"myZadarmaCallmeWidget13328" }, { "shape":"square", "language":"en", "width":"0", "dtmf":false, "font": "'Trebuchet MS','Helvetica CY',sans-serif", "color_call": "rgb(255, 255, 255)", "color_bg_call": "rgb(126, 211, 33)", "color_border_call": "rgb(191, 233, 144)", "color_connection": "rgb(255, 255, 255)", "color_bg_connection": "rgb(33, 211, 166)", "color_border_connection": "rgb(144, 233, 211)", "color_calling": "rgb(255, 255, 255)", "color_border_calling": "rgb(255, 218, 128)", "color_bg_calling": "rgb(255, 181, 0)", "color_ended": "rgb(255, 255, 255)", "color_bg_ended": "rgb(164,164,164)", "color_border_ended": "rgb(210, 210, 210)"
        });
      };
    
      if (window.addEventListener) {
        window.addEventListener('load', myZadarmaCallmeWidgetFn13328, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', myZadarmaCallmeWidgetFn13328);
      }
    </script>`);

    const [value2, setValue2] = useState(`<div id='zadarmaScripts'></div>
    <script>
        (function() {
           var script = document.createElement('script');
        script.src = 'https://my.zadarma.com/callmewidget/v2.0.8/loader.js';
        document.getElementById().appendChild(script);
          }());
    </script>`);

    const queryParams = new URLSearchParams(window.location.href);
    const shape = queryParams.get('shape');
    const text = queryParams.get('text');
    const callButtonBg = {
        backgroundColor: shape
    }
    const callButtonTc = {
        Color: text
    }

    return (

        <div>
            <div>
            </div>
            <Link to='/home'><button className="btn btn-sm btn-danger mx-5 m-8">Back To Home</button></Link>
            <h1 className='text-center text-5xl text-bold m-8'>Widget integration</h1>
            <div>
                <h1 className='text-2xl text-bold m-8'>Widget integration Widget</h1>
                <p className='text-xl  rounded bg-emerald-300 p-5'>Widget Widget was created successfully. To install the widget on the website, follow the installation instructions on this page.</p>

                <div>
                    <div className="text-xl font-medium">
                        <h1 className='text-2xl text-bold my-8'>Step 1. Add the code to load the required libraries</h1>
                    </div>
                    <div>
                        <p className='mx-8'>Insert the widget library load code at the very bottom of the website page, before the BODY closing tag.</p>
                        <label className='m-8'>
                            <textarea
                                style={{ color: "black" }}
                                readOnly='readonly'
                                className='p-5 m-8 bg-orange-50'
                                name="postContent"
                                defaultValue={value2}
                                rows={8}
                                cols={120}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-medium">
                        <h1 className='text-2xl text-bold my-8'>Step 2. Add the button code to the page</h1>
                    </div>
                    <div>
                        <p className='m-8'>Insert the widget code into the page of the website where the "Call us" button should be placed.</p>
                        <p className=' text-b mx-8'>Your widget code:</p>
                        <label className='m-8'>
                            <textarea
                                style={{ color: "black" }}
                                readOnly='readonly'
                                className='p-5 m-8 bg-orange-50 border-hidden max-w-full'
                                name="postContent"
                                defaultValue={value1}
                                rows={25}
                                cols={120}

                            />
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-4xl m-8'>Your Call Button</h1>
                <button className="flex gap-4 items-center justify-center bg-teal-400 mx-8 m-8" id='callButton' style={callButtonBg}>
                    <span><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"></path> <path opacity="0.4" d="M15 5.97021L17 7.97021L21 3.97021" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </span>
                    <span className='text-white text-2xl' id='colorChange' style={callButtonTc}>Call Us</span>
                </button>
            </div>
        </div>
    );
};

export default Widget_Integration;