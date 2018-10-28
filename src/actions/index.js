export const updateCurrentTime = () =>{return {
    type: 'UPDATE_TIMER',
    time: (new Date()).toLocaleTimeString()
}}