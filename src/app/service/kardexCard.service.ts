import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KardexCardDetailDTO } from '../model/kardexDetailDTO.model';
import { KardexCardDTO } from '../model/kardexCardDTO.model';

@Injectable()
export class KardexCardService {

  constructor(private http: HttpClient) {}

  getKardexCards(){
      return this.http.get('http://localhost:8080/api/v1/kardexCards')
  }

  addKardexDetail(kardexDetailDTO:KardexCardDetailDTO){
      return this.http.post('http://localhost:8080/api/v1/kardexDetails',kardexDetailDTO);
  }

  addKardexCard(kardexCardDTO:KardexCardDTO){
      return this.http.post('http://localhost:8080/api/v1/kardexCards',kardexCardDTO);
  }

}