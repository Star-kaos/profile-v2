import './titleBox.css';

function titleBox() {
    return (

        <div className="titleImage">
            <div className="titleBox">
                <div className="titleBoxNest">
                    <div className="titleButton">
                        <h1 className="titleHeading">Hello, my name is Elijah. Would you like to get in contact?</h1>
                        <div className='contactBtnANest'><a className="contactBtnA" href="#contact"><button className="contactBtn">Contact</button></a></div>
                    </div>
                    <div className="mePicNest">
                        <div className="mePic"></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default titleBox;



