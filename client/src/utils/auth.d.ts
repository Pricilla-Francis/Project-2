declare class AuthService {
    loggedIn(): string;
    getToken(): string;
    login(idToken: string): void;
    logout(): void;
}
declare const _default: AuthService;
export default _default;
