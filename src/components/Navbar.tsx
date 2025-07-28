export default function Navbar() {
    return (
        <nav id='main-nav'>
            <ul>
                <a className="cv-download" href="/cv.pdf" download="Thomas_Cox_CV.pdf" target="_blank">
                    <li>
                        CV
                    </li>
                </a>


                <li>
                    <a href="https://www.linkedin.com/in/tom-cox-a2b357215/" target="_blank" rel="noopener noreferrer">
                        <img src="../../public/assets/linkedin-icon.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/tac3563" target="_blank" rel="noopener noreferrer">
                        <img src="../../public/assets/github-icon.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://www.frontendmentor.io/profile/tac3563" target="_blank" rel="noopener noreferrer">
                        <img width="20" height="20" src="../../public/assets/frontend-mentor-icon.svg" alt=""/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}