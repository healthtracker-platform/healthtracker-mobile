import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from "../../environments/environment";
import {User} from "./user.model";
import {HttpService} from "./http.service";
import {Role} from "./role.model";



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static END_POINT = environment.REST_USER + '/users/token';
  private user: User;

  constructor(private httpService: HttpService, private router: Router) {
  }

  login(email: string, password: string): Observable<User> {
    return this.httpService.authBasic(email, password)
      .post(AuthService.END_POINT)
      .pipe(
        map(jsonToken => {
          const jwtHelper = new JwtHelperService();
          this.user = jsonToken; // {token:jwt} => user.token = jwt
          this.user.email = jwtHelper.decodeToken(jsonToken.token).user;  // secret key is not necessary
          this.user.name = jwtHelper.decodeToken(jsonToken.token).name;
          this.user.role = jwtHelper.decodeToken(jsonToken.token).role;
          return this.user;
        })
      );
  }

  logout(): void {
    this.user = undefined;
    this.router.navigate(['']).then();
  }

  isAuthenticated(): boolean {
    return this.user != null && !(new JwtHelperService().isTokenExpired(this.user.token));
  }

  hasRoles(roles: Role[]): boolean {
    return this.isAuthenticated() && roles.includes(this.user.role);
  }

  isAdmin(): boolean {
    return this.hasRoles([Role.ADMIN]);
  }

  isProfessional(): boolean {
    return this.hasRoles([Role.PROFESSIONAL]);
  }

  isPatient(): boolean {
    return this.hasRoles([Role.PATIENT]);
  }


  getEmail(): string {
    return this.user ? this.user.email : undefined;
  }

  getName(): string {
    return this.user ? this.user.name : '???';
  }

  getToken(): string {
    return this.user ? this.user.token : undefined;
  }

}
