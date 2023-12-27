import React, { Component } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";


export default class Social extends Component {
  
    render() {
    
    const SocialLink = [
        {
            id: 1,
            child: (
            <React.Fragment>
                LinkedIn <FaLinkedin size={20} className='ml-2'/>
            </React.Fragment> 
            ),
            href: 'https://www.linkedin.com/in/akintola-olamilekan',
            style: {
                backgroundColor: "#2677ba",
                borderTopRightRadius: '10px'
            }
        },

        {
            id: 2,
            child: (
                <React.Fragment>
                    GitHub <FaGithub size={20} className='ml-2'/> 
                </React.Fragment>
            ),
            href: 'https://github.com/horlami228',
            style: {
                backgroundColor: "#6c7b83"
            }
        },

        {
            id: 3,
            child: (
                <React.Fragment>
                    Twitter <FaXTwitter size={20} className='ml-2'/> 
                </React.Fragment>
            ),
            href: 'https://twitter.com/lazy_codding',
            style: {
                backgroundColor: "#333333"
            }
        },

        {
            id: 4,
            child: (
                <React.Fragment>
                    Email <MdEmail size={20} className='ml-2'/> 
                </React.Fragment>
            ),
            href: 'mailto:akintolaolamilekan51@gmail.com',
            style: {
                backgroundColor: "#0073e6"
            }
        },

        {
            id: 5,
            child: (
                <React.Fragment>
                    Resume <IoDocumentSharp size={20} className='ml-2'/> 
                </React.Fragment>
            ),
            href: '/react.jpg',
            style: {
                backgroundColor: "#001f3f",
                borderBottomRightRadius: '10px'
            },
            download: false
        },
    ]

    return (
      <div className="hidden xl:flex flex-col top-[25%] left-0 fixed">
        
        <ul>
            {SocialLink.map(({id, child, href, style, download}) => (
                <li key={id} className="flex justify-between items-center
                w-15 h-14 px-5" style={style}>
                    
                    <a href={href} className="flex justify-between items-center w-full" style={{
                        color: "white",
                        fontSize: "12px"
                    }} target='_blank' download={download} rel="noreferrer">
                        
                        {child}

                    </a>

                </li>
            ))}
        </ul>
        
      </div>
    )
  }
}
