import React from 'react'
import { CustomCollapse } from '../../components/CustomCollapse'
import { CustomButton } from '../../components/CustomButton'
import { Button } from 'antd'
import './Home.less'
import { faq } from '../../data'
import { icons } from '../../data'
import { Switch, Link, Route } from 'react-router-dom'
import { CheckCircleTwoTone, RightOutlined } from '@ant-design/icons'
import Ai from '../../images/AI.png'
import items from '../../images/Gr.png'
import Group1 from '../../images/Group 825.png'
import Group2 from '../../images/Group 826.png'
import Group4 from '../../images/Group5.png'
import marker from '../../images/marker.png'
import Group5 from '../../images/Group4.png'
import Group6 from '../../images/Group3.png'
import photo from '../../images/Frame 1.png'
import photo1 from '../../images/Frame 2.png'
import photo2 from '../../images/Frame 3.png'
import photo3 from '../../images/Frame 4.png'
export const Home = () => {

    return (
        <div>
            {/* header section */}
            <section className="header-section">
                <div className='header' >
                    <div>
                        <p className="sub-title">Powered By AI</p>
                        <h1>The smartest, <br /> fastest way to <br /> Legal Aggrements</h1>
                        <p className="text">
                            Generate your
                            <b> Privacy Policy, Terms of Use</b> <br /> or
                            <b> Cookie Policy</b>for
                            <a href=""> free</a>
                        </p>
                        <div>
                            <CustomButton primary>Generate for free</CustomButton>
                            <Button type="text">Learn more {">"} </Button>
                        </div>
                    </div>
                </div>
            </section>
            {/*section-1 */}
            <section>
                <div >
                    <div className="second-section">
                        <div>
                            <img className="second-section__img" src={items} alt="" />
                        </div>
                        <div>
                            <img className="AI" src={Ai} alt="AI" />
                            <p className='second-section_title'>Discover Possibilities</p>
                            <div className="second-section__item">Streamline Your<br /> Purpose with AI</div>
                            <div className="second-section__text">Streamline cost-effective solutions for your business.<br />
                             Generate legally compliant documents seamlessly with<br />
                              customizable agreements and policies for your website <br />
                               or mobile app anytime, anywhere with iTerms.</div>
                            <div className="second-section__p">
                                <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Unlimited downloads for 9.95 a one-time fee  </p>
                                <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} All legal agreements confirmed by a practicing lawyer</p>
                                <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} EU/US and main privacy laws covered</p>
                                <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Automatic legal updates powered by AI</p>
                                <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Industry-leading competitive pricing </p>
                                <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Securely host your policies on our platform</p>
                                <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Easy embed policy on your domain</p>
                                <p><CheckCircleTwoTone twoToneColor="#52c41a" /> {" "} Suitable for most Web/Mobile apps</p>
                            </div>
                            <div className="second-section__btns">
                                <CustomButton primary>Generate</CustomButton>
                                <Button text className="btn-learn-more">Learn more <span className="icon-right"><RightOutlined /></span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/*section-2 */}
            <section >
                <div className="third-section__img">
                    <div className="container">
                        <img src={Group1} alt="Group825" />
                    </div>
                </div>
            </section>

            {/*section-3 */}
            <section>
                <div className="fourth-section__img">
                    <div className="container">
                        <img src={Group2} alt="Group825" />
                    </div>
                </div>
                {/*section-4 */}
                <div className='all-sections'>
                    <div className="fifth-section__img">
                        <div className="container">
                            <img className='circle' src={Group4} alt="Circle" />
                            <img className='marker' src={marker} alt="marker" />
                        </div>
                    </div>

                    {/* icons */}
                    <div className='icon-container'>
                        <div className="container">
                            <div className='icons'>
                                <div className="icon">
                                    {icons.map((el, id) => {
                                        return (
                                            <div className='icon-card'>
                                                <img className='icon-img' src={el.img} alt="" />
                                                <div className="icon-text">{el.title}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*section-blue */}
            < section >
                <div className='blue-section'>
                    <div className='container'>
                        <img className='blue-img' src={Group5} />
                    </div>
                </div>
            </section >
            {/*section-5 */}
            <section className='group-section'>
                <div >
                    <img className='card-img' src={Group6} />
                </div>
            </section>

            {/*section-6 */}
            <section className='pcivacy-section'>
                <div className="container">
                    <p className="sub-title">Keep Up With the Latest  </p>
                    <h2>Discover What’s New</h2>
                    <p style={{ marginBottom: '60px' }}>Learn from the experts at iTerms to ensure you stay on top of<br />
                industry legalities and changing legal landscapes at all times.</p>
                    <div >
                        <img src={photo} className='images' />
                        <img src={photo1} className='images' />
                        <img src={photo2} className='images' />
                        <img src={photo3} className='images' />
                    </div>
                    <CustomButton style={{ marginBottom: '180px', marginTop: '60px' }} primary> Read More</CustomButton>
                </div>
            </section>
            {/* faq section */}
            <section className="faq-section">
                <div className="container">

                    <p className="sub-title">Solutions to Your Problems</p>
                    <h2>Do You Have any Questions?</h2>
                    <p>Take a look through our answers! Still, have questions? Please don't be afraid to contact our team at any time.</p>

                    <div className="collapse-block">

                        <div className="sidebar">
                            <h3>Table of Contents</h3>
                            {faq.map((el, id) => {
                                return <Link key={id} to={`/${el.title}`}>
                                    {el.title}
                                </Link>
                            })}
                        </div>

                        <div className="collapse">
                            <Switch>
                                {faq.map((el, id) => {
                                    return <Route path={`/${el.title}`} key={id}>
                                        <CustomCollapse el={el} />
                                    </Route>
                                })}
                            </Switch>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}