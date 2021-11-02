export class JwtResponse {
    public token: string;
    public fullName: string;
    public avatar: string;
    public role: any[];
    constructor(token: string, fullName: string,avatar: string, role: any) {
        this.token = token;
        this.fullName = fullName;
        this.avatar = avatar;
        this.role = role;
    }
}
