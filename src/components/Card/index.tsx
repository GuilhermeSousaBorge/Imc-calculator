import type { Level } from "../../helpers/imc"

type Props ={ 
    item: Level
}
export const Card = ({ item }: Props) => {
    const Icon = item.icon
    return(
        <div className="h-full flex-1 text-white rounded-lg flex justify-center items-center flex-col p-5" style={{backgroundColor: item.color}}>
            <div>
                {Icon && <Icon size={48}/>}
            </div>
            <div className="font-bold text-white text-2xl mt-4">{item.title}</div>
            {item.calculatedImc && <div className="text-3xl">Seu IMC é <strong>{item.calculatedImc} kg/m²</strong></div>}
            <div className="mt-4 text-sm">IMC entre {item.range[0]} e {item.range[1]}</div>

        </div>
    )
}