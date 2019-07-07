'use strict';
// librerias
//clases del servicio
const CRUD = require('./crud');
const Queries = require('./queries');

class Tingle {

  constructor() {
    this.crud = new CRUD();
  }

  async getInvestments() {
    try {
      return (Queries.investments);
    } catch (error) {
      console.log('murio');
    }
  }
  async getContracts() {
    try {
      return (Queries.contracts);
    } catch (error) {
      console.log('murio');
    }
  }
  async getDetails(id) {
    try {
      return (Queries.details);
    } catch (error) {
      console.log('murio');
    }
  }
}
module.exports = Tingle;