import React, {useState} from 'react'
import logo from '../../img/PruzameLogo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
const Header = () => {
    const [over, setOver] = useState(false);
    const [active, setActive] = useState(0);

    return <Navbar className="navbar-brand-center navbar-nav flex-row header" expand={"lg"}>
        <Navbar.Brand href="#" className={"offset-5 col-2"}>
            <Image style={{"maxHeight": "12vw"}} src={logo} fluid/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={"navbar-toggler ml-auto offset-4 col-1"}/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <li className={"pt-2"}>
                    <Nav.Link className={"text-light"} style={{"fontSize": "larger"}} href="#">Home</Nav.Link>
                </li>
                <li className={"pt-2"}>
                    <Dropdown as={Nav.Item} show={over} navbar={true}>
                        <Dropdown.Toggle className={"text-light"} style={{"fontSize": "larger"}} id="fpDropdown" onMouseOver={()=>{setOver(true);}} onMouseOut={()=>{setOver(false);}}>For Patients</Dropdown.Toggle>
                        <Dropdown.Menu renderOnMount={true} onMouseOver={()=>{setOver(true);}} onMouseOut={()=>{setOver(false);}} className={"bg-light"}>
                            <Dropdown.Item active={active === 1} eventKey="1" onMouseOver={()=>{setActive(1);}} onMouseOut={()=>{setActive(0);}}>About Anaesthesia</Dropdown.Item>
                            <Dropdown.Item active={active === 2} eventKey="2" onMouseOver={()=>{setActive(2);}} onMouseOut={()=>{setActive(0);}}>Anaesthetic Fees</Dropdown.Item>
                            <Dropdown.Item active={active === 3} eventKey="3" onMouseOver={()=>{setActive(3);}} onMouseOut={()=>{setActive(0);}}>
                                Useful Links
                            </Dropdown.Item>
                            <Dropdown.Item active={active === 4} eventKey="4" onMouseOver={()=>{setActive(4);}} onMouseOut={()=>{setActive(0);}}>Privacy Policy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className={"pt-2"}>
                    <Nav.Link className={"text-light"} style={{"fontSize": "larger"}} href="#">Contact</Nav.Link>
                </li>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};

export default Header;