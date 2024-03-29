import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        lang: 'html',
        imgUrl: html,
        buttonContent: "HTML",
        code: `<div>
        <h1>Editeur de code avec React </h1>
        <p>Codez directement sur votre navigateur. </p>
</div>`
    },
    {
        id: 2,
        lang: 'css',
        imgUrl: css,
        buttonContent: "CSS",
        code: `body {
            font-family: Roboto, sans-serif;
            padding: 25px;
            color: #111;
            background-color: #f1f1f1;
}`
    },
    {
        id: 3,
        lang: 'javascript',
        imgUrl: js,
        buttonContent: "JavaScript",
        code: `console.log("Hello World !")`
    }
]

export const codeUpdater = createSlice({
    name: "code-updater",
    initialState,
    reducers: {
        updateCode: (state, action) => {
            state.find(obj => obj.id == action.payload.id).code = action.payload.value;
        }
    }
})

export const {updateCode} = codeUpdater.actions
export default codeUpdater.reducer