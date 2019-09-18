export const loadState = (state_key) => {
    try {
        const serializedState = localStorage.getItem(state_key);
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
        return undefined;
    }
}

export const saveState = (state, state_key) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(state_key, serializedState);
    } catch (e) {
        // Ignore write errors for now
    }
}