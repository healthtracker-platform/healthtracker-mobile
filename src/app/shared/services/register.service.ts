import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpService} from "../../core/http.service";
import {User} from "../models/user.model";
import {EndPoints} from "../end-points";
import {Register} from "../models/register.model";


@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  public static WEIGHT = "/weight/";
  public static WAIST = "/waist/";
  public static EMOTION = "/emotion/";

  constructor(private httpService: HttpService) {
  }

  create(register: Register): Observable<Register> {
    return this.httpService
      .post(EndPoints.REGISTERS , register);
  }

  searchWeightByName(name: String): Observable<Register[]>{
    return this.httpService
         .get(EndPoints.REGISTERS + RegisterService.WEIGHT + name);
  }

  searchWaistByName(name: String): Observable<Register[]>{
    return this.httpService
      .get(EndPoints.REGISTERS + RegisterService.WAIST + name);
  }

  searchEmotionByName(name: String): Observable<Register[]>{
    return this.httpService
      .get(EndPoints.REGISTERS + RegisterService.EMOTION + name);
  }
}
