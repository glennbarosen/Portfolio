import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import CVContent from '../content/CV.md'
import noCV from '../assets/cv-gab-no.pdf'
import enCV from '../assets/cv-gab-en.pdf'
import { getMarkdown } from '../App.js'
import { container, contentCV, cvLinks } from '../styles/styles'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

const CV = () => {
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        getMarkdown(CVContent, setMarkdown)
    }, [])

    return (
        <div css={container}>
            <p css={cvLinks}>
                pdf version - <a
                    className='cv-link'
                    href={noCV}
                    rel="noopener noreferrer"
                    target="_blank">norwegian</a> / <a
                        className='cv-link'
                        href={enCV}
                        rel="noopener noreferrer"
                        target="_blank">english</a>
            </p>
            <ReactMarkdown css={contentCV}
                children={markdown}
                linkTarget={'_blank'} />
        </div>
    )
}

export default CV