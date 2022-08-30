import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'

export const Card = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div style={{ color: theme.color, backgroundColor: theme.background }}>
            <h1>Título do Card</h1>
            <p>Parágrafo do Card, Parágrafo do Card, Parágrafo do Card, Parágrafo do Card, Parágrafo do Card, Parágrafo do Card</p>
        </div>
    )
}