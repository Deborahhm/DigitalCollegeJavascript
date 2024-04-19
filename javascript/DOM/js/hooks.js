
export function useEvent(functionToExecute) {
    
    let functionName = functionToExecute.name === '' 
        ? `fn_${Math.random().toString().replace('0.', '')}` 
        : functionToExecute.name

    if(!window[functionName]) {
        window[functionName] = functionToExecute;
    }

    return `${functionName}`;

}