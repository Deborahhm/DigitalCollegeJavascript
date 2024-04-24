export function createState(value) {
    let state = value;

    return (newValue) => {

        if(newValue === undefined) {
            return state;
        }

        return state = newValue;
    }
}