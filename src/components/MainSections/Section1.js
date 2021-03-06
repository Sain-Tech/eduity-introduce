import React from 'react';
import ImgDevices from '../../images/main_sections/main_1-0.png';
import '../../styles/main_section_1.scss';
import { Fade } from 'react-reveal';
import { withRouter } from 'react-router-dom';
/**
 * h1: 36px / 44px
 * h2: 32px / 42px
 * h3: 24px / 32px
 * h4: 18px / 24px
 * p: 16px
 */
function Section1({ history }) {
    return (
        <>
            <div className="left-and-top">
                <div className="contents">
                    <Fade bottom distance={'3rem'} delay={333} duration={666}>
                        <h1>
                            학습에 불필요한 <br /> 시간과 비용을 없앱니다.
                        </h1>
                    </Fade>
                    <Fade bottom distance={'3rem'} delay={666} duration={666}>
                        <h4>에듀이티만의 차별화 된 영어학습</h4>
                    </Fade>
                    <Fade delay={1330} duration={1000}>
                        <div>
                            <button
                                type="button"
                                className="normal in-section"
                                onClick={() => {
                                    history.push('/bookonline');
                                }}
                            >
                                무료체험하기
                            </button>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="right-and-bottom">
                <Fade right distance={'4rem'} duration={666}>
                    <img src={ImgDevices} alt="service in devices..." />
                </Fade>
            </div>
        </>
    );
}

export default React.memo(withRouter(Section1));
