import React from 'react'
import { footerData } from './footerData'
import { newsletter } from './footerData'
import LogoName from '../../shared/logoName'
import { Link } from 'react-router-dom'
import Subscribe from './subscribe'



function Footer() {
    return (
        <div className='w-full'>
            <div className="container mb-10">
                {/* banner */}
            </div>
            
            <div className="bg-black text-white
            ">
                <div className="container grid gap-10 py-16 lg:grid-cols-2 lg:gap-0 w-[80%] mx-auto">
                    <div className="space-y-10 md:pr-20">
                        <LogoName name='AgroZam'/>
                        <p className="">{footerData.description}</p>
                        <Subscribe/>
                    </div>

                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                        <div className="space-y-5">
                            <h4 className="text-2xl font-medium">
                                {footerData.footerLinks[0]?.title}
                            </h4>
                            {footerData.footerLinks[0]?.links.map((link) => (
                                <div key={link.name}>   
                                    <Link to={link.href}>{link.name}</Link>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="grid gap-5">
                                {footerData.footerLinks.slice(1, 3).map((item) => (
                                    <div key={item.title} className="space-y-5">
                                        <h4 className="text-2xl font-medium">{item.title}</h4>
                                        {item.links.map((link) => (
                                            <div key={link.name}>
                                                <Link to={link.href}>{link.name}</Link>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-2xl font-medium">
                                {footerData.footerLinks[3]?.title}
                            </h4>
                            {footerData.footerLinks[3]?.links.map((link) => (
                                <div key={link.name}>
                                    <Link to={link.href}>{link.name}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer