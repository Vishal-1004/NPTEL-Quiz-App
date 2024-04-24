import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {MdQuiz} from 'react-icons/md'
import {BiError} from 'react-icons/bi'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const Navigate = useNavigate()

  const handleClick = (link) => {
    Navigate(`/${link}`)
  }

  return (
    <NavbarStyle>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <div className="container-fluid mx-0">
          <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/">
            <MdQuiz size={30} style={{color: '#0d6efd'}} />
            <span className="logo-name">&nbsp;Quiz App</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="btn-frg-style ms-auto">
              <Link
                className="btn btn-outline-dark px-3 me-3 my-1"
                to="https://github.com/Vishal-1004/VIT-Grade-Guru"
                target="_blank"
                role="button"
              >
                <div className="d-flex align-items-center">
                  <FaGithub /> &nbsp; Source Code
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </NavbarStyle>
  )
}

const NavbarStyle = styled.section`
  .logo-name {
    font-weight: 400 !important;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .btn-frg-style {
      margin: 0 !important;
      display: flex;
      width: fit-content;
      justify-content: center;
      flex-direction: column;
    }
  }
`

export default Navbar
