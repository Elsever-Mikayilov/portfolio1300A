import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faDesktop,faFileCode} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className='services'>
            <h1 className='py-5'>Services</h1>
            <div className='container'>
                <div className='row'>
                    {/* google seo xidmetleri */}

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                        <div className='circle'>
                            <FontAwesomeIcon icon={faGoogle}  className='icon' />
                        </div>
                        <h2>SEO</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cum.</p>
                        </div>

                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                        <div className='circle'>
                            <FontAwesomeIcon icon={faFileCode}  className='icon' className='icon' />
                        </div>
                        <h2>WEB Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cum.</p>
                        </div>

                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                        <div className='circle'>
                            <FontAwesomeIcon icon={faFacebookF}  className='icon' />
                        </div>
                        <h2>Facebook SNM</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cum.</p>
                        </div>

                    </div>


                    <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className='box'>
                        <div className='circle'>
                            <FontAwesomeIcon icon={faDesktop}  className='icon' />
                        </div>
                        <h2>IT, helpdesk</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cum.</p>
                        </div>

                    </div>

                    
                </div>

                {/* web developmentle elaqeli sahe */}

            </div>
        </div>
    )
}

export default Services
