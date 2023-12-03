export interface Speciality {
    id: number;
    name: string;
    accesses: Array<Access>;
    accessGroups: Array<AccessGroup>;
}

export interface Access {
    id: number;
    name: string;
}

export interface AccessGroup {
    id: number;
    name: string;
    accesses: Array<Access>;
}

export interface AuthUser{
    email: string;
    token: string;
}
