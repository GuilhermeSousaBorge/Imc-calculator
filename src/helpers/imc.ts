import { Annoyed, Frown, Laugh, Smile } from "lucide-react"

export type Level = {
    title: string
    color?: string
    icon?: React.ElementType
    calculatedImc?: number
    range: number[]
}

export const levels: Level[] = [
    {title: 'Magreza Grave', color: ' #9ca3af', icon: Frown, range: [0, 16]},
    {title: 'Magreza Moderada', color: ' #6B7280', icon: Frown, range: [16, 16.9]},
    {title: 'Magreza Leve', color: ' #15803d', icon: Smile, range: [16.9, 18.4]},
    {title: 'Normal', color: '#166534', icon: Laugh, range: [18.5, 24.9]},
    {title: 'Sobrepeso', color: '#f59e0b', icon: Annoyed, range: [24.9, 29.9]},
    {title: 'Obesidade grau 1', color: '#eab308', icon: Frown, range: [29.9, 34.9]},
    {title: 'Obesidade severa', color: '#ef4444', icon: Frown, range: [34.9, 39.9]},
    {title: 'Obesidade mórbida', color: '#991b1b', icon: Frown, range: [39.9, 40]},
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight/(height*height);
    for (const item of levels) {
        if(imc > item.range[0] && imc <= item.range[1]) {
            const levels_copy: Level = {...item, calculatedImc: parseFloat(imc.toFixed(2))}
            return levels_copy
        }
    }
    return null
}