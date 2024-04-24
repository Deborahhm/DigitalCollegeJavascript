


export function useEvent(functionToExecute) {
    
    let functionName = functionToExecute.name === '' 
        ? `fn_${Math.random().toString().replace('0.', '')}` 
        : functionToExecute.name

    if(!window[functionName]) {
        window[functionName] = functionToExecute;
    }

    return `${functionName}`;

}

export function useState(defaultValue) {
    let state = defaultValue
    
    const getState = () => state;

    const setState = (value) => {
        console.log(value);
        state = value
    }


    return [getState, setState];
}