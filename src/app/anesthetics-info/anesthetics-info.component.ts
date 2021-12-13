import { Component, OnInit } from '@angular/core';
import { OdontoCalculatorService } from '../services/odonto-calculator.service';

@Component({
  selector: 'app-anesthetics-info',
  templateUrl: './anesthetics-info.component.html',
  styleUrls: ['./anesthetics-info.component.css']
})
export class AnestheticsInfoComponent implements OnInit {

  patientName: string ='Ana Claudia';
  patientAge: number = 25;
  patientGender: string ='Feminino';
  patientWeight: number = 50;
  Lidocaine: number = 0;

  lidocaineTubes = this.odontoCalculator.calcAnesthetics('lidocaine',this.patientAge,this.patientWeight);
  mepivacaineTubes = this.odontoCalculator.calcAnesthetics('mepivacaine',this.patientAge,this.patientWeight);
  articaineTubes = this.odontoCalculator.calcAnesthetics('articaine',this.patientAge,this.patientWeight);
  prilocaineTubes = this.odontoCalculator.calcAnesthetics('prilocaine',this.patientAge,this.patientWeight);

  constructor( private odontoCalculator: OdontoCalculatorService) { }

  ngOnInit(): void {
  }

}
