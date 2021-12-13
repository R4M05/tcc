import { TestBed } from '@angular/core/testing';

import { OdontoCalculatorService } from './odonto-calculator.service';

describe('OdontoCalculatorService', () => {
  let service: OdontoCalculatorService;
  let lidocaineTubes: number;
  let mepivacaineTubes: number;
  let articaineTubes: number;
  let prilocaineTubes: number;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdontoCalculatorService);
  });

  describe('Check service creation', () => {

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

  });
  
  describe('Tests for an adult weighing 50 kg', () => {

    let patientWeight = 50;
    let patientAge = 13; 
    
    it('should return 9.7 lidocaine',() => {
       lidocaineTubes = service.calcAnesthetics('lidocaine',patientAge,patientWeight)
       expect(lidocaineTubes).toEqual(9.7)
    });
  
    it('should return 9.2 mepivacaine',() => {
      mepivacaineTubes = service.calcAnesthetics('mepivacaine',patientAge,patientWeight)
      expect(mepivacaineTubes).toEqual(9.2)
    });
  
    it('should return 9.7 articaine',() => {
      articaineTubes = service.calcAnesthetics('articaine',patientAge,patientWeight)
      expect(articaineTubes).toEqual(9.7)
    });
  
    it('should return 11.1 prilocaine',() => {
      prilocaineTubes = service.calcAnesthetics('prilocaine',patientAge,patientWeight)
      expect(prilocaineTubes).toEqual(11.1)
    });

  });

  describe('Tests for an child weighing 50 kg', () => {

    let patientWeight = 50;
    let patientAge = 12;
    
    it('should return 9.7 lidocaine',() => {
       lidocaineTubes = service.calcAnesthetics('lidocaine',patientAge,patientWeight)
       expect(lidocaineTubes).toEqual(6.1)
    });
  
    it('should return 9.2 mepivacaine',() => {
      mepivacaineTubes = service.calcAnesthetics('mepivacaine',patientAge,patientWeight)
      expect(mepivacaineTubes).toEqual(6.1)
    });
  
    it('should return 9.7 articaine',() => {
      articaineTubes = service.calcAnesthetics('articaine',patientAge,patientWeight)
      expect(articaineTubes).toEqual(9.7)
    });
  
    it('should return 11.1 prilocaine',() => {
      prilocaineTubes = service.calcAnesthetics('prilocaine',patientAge,patientWeight)
      expect(prilocaineTubes).toEqual(8.3)
    });

  });

  describe('Maximum Anesthetic Dose Tests for Adults', () => {

    var heavyWeight = 300;
    let patientAge = 13;
    
    it('should not exceed the maximum dose of lidocaine',() => {
      lidocaineTubes = service.calcAnesthetics('lidocaine',patientAge,heavyWeight)
      expect(lidocaineTubes).toEqual(13.9)
    });
  
    it('should not exceed the maximum dose of mepivacaine',() => {
      mepivacaineTubes = service.calcAnesthetics('mepivacaine',patientAge,heavyWeight)
      expect(mepivacaineTubes).toEqual(11.1)
    });
  
    it('should not exceed the maximum dose of articaine',() => {
      articaineTubes = service.calcAnesthetics('articaine',patientAge,heavyWeight)
      expect(articaineTubes).toEqual(13.9)
    });
  
    it('should not exceed the maximum dose of prilocaine',() => {
      prilocaineTubes = service.calcAnesthetics('prilocaine',patientAge,heavyWeight)
      expect(prilocaineTubes).toEqual(16.7)
    });
  });

  describe('Maximum Anesthetic Dose Tests for Children', () => {

    var heavyWeight = 300;
    let patientAge = 12;
    
    it('should not exceed the maximum dose of lidocaine',() => {
      lidocaineTubes = service.calcAnesthetics('lidocaine',patientAge,heavyWeight)
      expect(lidocaineTubes).toEqual(8.3)
    });
  
    it('should not exceed the maximum dose of mepivacaine',() => {
      mepivacaineTubes = service.calcAnesthetics('mepivacaine',patientAge,heavyWeight)
      expect(mepivacaineTubes).toEqual(8.3)
    });
  
    it('should not exceed the maximum dose of articaine',() => {
      articaineTubes = service.calcAnesthetics('articaine',patientAge,heavyWeight)
      expect(articaineTubes).toEqual(13.9)
    });
  
    it('should not exceed the maximum dose of prilocaine',() => {
      prilocaineTubes = service.calcAnesthetics('prilocaine',patientAge,heavyWeight)
      expect(prilocaineTubes).toEqual(11.1)
    });
  });

});
