export function canCreateTask({session}: {session?: any}){
    
    if (session.data?.isAdmin){
        return {};
    }

    return false;
}

export function hasSession({session}: {session?: any}){
    return Boolean(session);
}

export function canUpdateField({session}: {session?: any}){
    if(!session)return false;

    if (session.data?.isAdmin){
        return {};
    }

    return {}
}