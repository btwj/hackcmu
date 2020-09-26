import create from 'zustand';

export const useDataStore = create((set, get) => ({
    fceData: {},
    getFceData: async () => {
        if (Object.keys(get().fceData).length != 0) return;
        let response = await fetch(`https://cmu-student-government.github.io/cmunit/fce.json`, {
            method: 'GET'
        });
        let fceData = await response.json();
        set({ fceData });
    }
}))