export class SignUpForm {
    fullName: string;
    username: string;
    email: string;
    password: string;
    role: string[];
    constructor(fullName: string, username: string, email: string, password: string) {
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['ROLE_USER']
    }
}
