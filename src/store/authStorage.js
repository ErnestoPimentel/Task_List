const AUTH_STORAGE_KEY = 'taskflow.auth';

export function getStoreAuth(){
    const storeAuth = localStorage.getItem(AUTH_STORAGE_KEY);

    if(!storeAuth){
        return null;
    }

    try{
        return JSON.parse(storeAuth);
    }
    catch{
        localStorage.removeItem(AUTH_STORAGE_KEY);
        return null;
    }
}

export function saveAuth(auth){
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
}

export function clearAuth(){
    localStorage.removeItem(AUTH_STORAGE_KEY);
}