import { useState } from "react"


export const useForm = (initialForm={}) => {
    const [datos, setDatos] = useState(initialForm)
    const onInputChange = ( {target} ) => {
        const { name, value } = target
        setDatos(current=>({ ...current, [name]: value }))
    }
    const onResetForm=()=>{
        setDatos(initialForm)
    }
    const onSubmit=(event)=>{
        event.preventDefault()

    }
    return {
        datos,
        ...datos,
        onResetForm,
        onInputChange
    }

}
