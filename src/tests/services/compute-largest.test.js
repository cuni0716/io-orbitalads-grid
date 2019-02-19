import { expect } from 'chai';
import computeLargest, { addCoordinate } from 'services/compute-largest';

describe('Compute largest connection', () => {
  describe('Add Coordinate', () => {
    it('should add coordinate to an empty list of blocks', () => {
      expect(addCoordinate('00', [])).to.eql([['00']]);
    });
    it('should add coordinate to a non empty list of blocks', () => {
      expect(addCoordinate('00', [['01']])).to.eql([['00', '01']]);
    });
  });
  it('should return 0 from an empty list', () => {
    expect(computeLargest([])).to.eql(0);
  });
  it('should return 3 from a sample list', () => {
    expect(computeLargest([
      '18', '00', '95', '40', '36', '26', '57', '48', '54', '65', '76', '87', '97', '47',
    ])).to.eql(3);
  });
  it('should return 2 with more than a winner', () => {
    expect(computeLargest([
      '18', '00', '95', '40', '36', '26', '57', '54', '65', '76', '87', '97', '47',
    ])).to.eql(2);
  });
  it('should return 6 with more complex state', () => {
    expect(computeLargest([
      '11', '21', '44', '54', '18', '17', '16', '15', '14', '67', '57', '47', '37', '38', '41',
      '51', '61', '71', '70', '97', '96', '95', '94', '93', '92',
    ])).to.eql(6);
  });
  it('should return 100 with full', () => {
    expect(computeLargest(['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
      '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27',
      '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43',
      '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
      '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75',
      '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91',
      '92', '93', '94', '95', '96', '97', '98', '99',
    ])).to.eql(100);
  });
});
