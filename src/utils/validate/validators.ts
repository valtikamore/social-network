

export const required = (value:string) => {
  return   value? undefined : 'field is req'
}

export const maxLengthCreator = (symbalLength:number) => {
    return (value: string) => {
        if (value.length > symbalLength) {
            return `max length is ${symbalLength} symbols`
        } else {
            return undefined
        }
    }
}