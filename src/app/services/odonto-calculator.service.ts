import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OdontoCalculatorService {

  constructor() { }

  calcAnesthetics(anesthetics: string, age: number, weight: number): number{
     switch (anesthetics) {
        case 'lidocaine':
           if ( age > 12 ) { 
               var maxDose = 500;
               var mgPerKilo = 7.0;
               return this.GetNumberOfTubes(weight, maxDose, mgPerKilo);
           } 
           else { 
              var maxDose = 300;
              var mgPerKilo = 4.4;
              return this.GetNumberOfTubes(weight, maxDose, mgPerKilo);
           }
          case 'mepivacaine':
             if ( age > 12 ) {
               var maxDose = 400;
               var mgPerKilo = 6.6;
               return this.GetNumberOfTubes(weight, maxDose, mgPerKilo);
            } 
            else {
               var maxDose = 300;
               var mgPerKilo = 4.4;
               return this.GetNumberOfTubes(weight, maxDose, mgPerKilo);
            }
            case 'articaine':
               if ( age > 12 ) { 
                  var maxDose = 500;
                  var mgPerKilo = 7.0;
                  return this.GetNumberOfTubes(weight, maxDose, mgPerKilo);
               } 
               else { 
                  var maxDose = 500;
                  var mgPerKilo = 7.0
                  return this.GetNumberOfTubes(weight, maxDose, mgPerKilo);
               }
               case 'prilocaine':
               if ( age > 12 ) {
                  var maxDose = 600; 
                  var mgPerKilo = 8.0;
                  return this.GetNumberOfTubes(weight, maxDose, mgPerKilo);
               } 
               else {
                  var maxDose = 400; 
                  var mgPerKilo = 6.0
                  return this.GetNumberOfTubes(weight, maxDose, mgPerKilo);
               }}
     return undefined!; 
   }

   GetNumberOfTubes(weight: number, maxDosage: number, mgPerKilo: number){

      let milligramsPerTube = 36;
      let dose: number;

      if( mgPerKilo * weight > maxDosage ) { 
         dose = maxDosage;
      }
      else { 
         dose = mgPerKilo * weight;
      }
      return Number((dose / milligramsPerTube).toFixed(1));
   }

}

