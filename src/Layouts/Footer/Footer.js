import './footer.css';
import { NavLink } from  'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="sticky-footer bg-white footer">
                <div className="d-flex align-items-center justify-content-between pl-3 pr-3">
                    <img src="https://a1at.studymonitoring.net/img/logo/PCT-Logo.svg" alt="PCT logo" />
                    <div>
                        <NavLink className="text-underline" to="/privacy-policy">Privacy Policy</NavLink>
                        <NavLink className="text-underline" to="/terms-and-conditions">Terms &amp; Conditions</NavLink>
                    </div>
                    <a className="text-underline" href="mailto:site_support_a1at_201@pctlabresearch.com">Email to Support Team</a>
                    <img src="https://a1at.studymonitoring.net/img/logo/synlab.png" alt="SYNLAB logo" />
                </div>
            </footer>
        </>
    )
}

export default Footer;