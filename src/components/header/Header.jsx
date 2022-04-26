import React , { useRef , useState , useEffect } from 'react';
import TopBar from './TopBar';
import { Link , useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo/logo_dark.png';
import logo2x from '../../assets/images/logo/logo_dark@2x.png';
import logolight from '../../assets/images/logo/logo.png';
import logolight2x from '../../assets/images/logo/logo@2x.png';
import menus from "../../pages/menu";
import DarkMode from "./DarkMode";
import icon from '../../assets/images/icon/connect-wallet.svg';
import Web3 from 'web3/dist/web3.min.js';
import detectEthereumProvider from '@metamask/detect-provider';


const Header = () => {
    
    const { pathname } = useLocation();
    const headerRef = useRef (null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        
        scrollTop >= 100 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 120 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }


    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index); 
    };

    const menuDetail = menus.map((data, index) => (
        <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item menu-item-has-children ${activeIndex === index ? 'active' : ''} ` }   >
            <Link to={data.links}>{data.name}</Link>
            
        </li>
    ))
    console.log(menuDetail)

    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
      })
    
      const [account, setAccount] = useState(null)
    
      useEffect(() => {
        const loadProvider = async() => {
          const provider = await detectEthereumProvider();
    
          if (provider) {
            setWeb3Api({
              web3: new Web3(provider),
              provider
            })
          } else {
            console.error("Cai Metamask")
          }
        }
        loadProvider()
      }, [])
    
      
        
    return <div>
      <TopBar />
      <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                        <div id="site-header-inner" className="flex">
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img id="logo_header" className='logo-dark' src={logo} srcSet={logo2x} alt="Only One" />
                                        <img id="logo_header" className='logo-light' src={logolight} srcSet={logolight2x} alt="Only One" />
                                    </Link>
                                </div>
                            </div>
                            <form className="form-search">
                                <input type="text" placeholder="Tìm sản phẩm" />
                                <button><i className="far fa-search"></i></button>
                            </form>

                            <nav id="main-nav" className="main-nav" ref={menuLeft}>
                                <ul id="menu-primary-menu" className="menu">
                                    {
                                        menus.map((data,index) => (
                                            <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item ${!data.namesub === false ? 'menu-item-has-children' : ''} ${activeIndex === index ? 'active' : ''} ` }   >
                                                <Link to={data.links}>{data.name}</Link>
                                               
                                                { !data.namesub === false ? <ul className="sub-menu" >
                                                    {
                                                        data.namesub.map((submenu,index) => (
                                                            <li key={index} className={
                                                                pathname === submenu.links
                                                                    ? "menu-item current-item"
                                                                    : "menu-item"
                                                                }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                        ))
                                                    }
                                                </ul> : ''}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                            <div className="button-connect-wallet">
                                <div className="sc-button wallet  style-2" 
                                onClick = {()=>
                                web3Api.provider.request({ method: "eth_requestAccounts"})
                                }
                                >
                                    <img src={icon} alt="icon" />
                                    <span>Kết Nối Ví</span>
                                </div>
                            </div>

                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </header>
  </div>;
};

export default Header;
