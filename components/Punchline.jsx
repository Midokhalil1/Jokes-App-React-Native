import { useState, useEffect } from 'react'

import { Text } from 'react-native'


import styles from '../styles'

export default function Punchline({ punchline }) {
    const [reveal, setReveal]= useState(false)
    useEffect(() => {
    useEffect(false)
}, [punchline])
    return (
        <Text style={styles.punchline}>{punchline}</Text>
    )
}