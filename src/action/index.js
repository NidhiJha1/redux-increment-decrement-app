export const incNumber = (num) => {
    return{
        type:"ICREMENT",
        payload: num
    }
}

export const decNumber = (num) => {
    return{
        type:"DECREMENT",
        payload: num
    }
}