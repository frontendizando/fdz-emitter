import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import Emmiter from '../index.js'

describe('Emmiter', () => {
  describe('Smoke tests', () => {
    let eventEmmiter;

    beforeEach(() => {
        eventEmmiter = new Emmiter();
    });

    it('should to exists', () => {
        expect(Emmiter).to.exist;
        expect(Emmiter).to.be.a('function');
    });

    it('should to be called with `new`', () => {
      // expect().to.exist;
    });

    it('should to be a instance of `Emmiter` class', () => {
        expect(eventEmmiter).to.exist;
        expect(eventEmmiter).to.be.a('object');
        expect(eventEmmiter instanceof Emmiter).to.be.true;
    });

    it('should to have a method called `on`', () => {
        expect(eventEmmiter.on).to.exist;
        expect(eventEmmiter.on).to.be.a('function');
    });

    it('should to have a method called `once`', () => {
        expect(eventEmmiter.once).to.exist;
        expect(eventEmmiter.once).to.be.a('function');
    });

    it('should to have a method called `off`', () => {
        expect(eventEmmiter.off).to.exist;
        expect(eventEmmiter.off).to.be.a('function');
    });

    it('should to have a method called `dispatch`', () => {
        expect(eventEmmiter.dispatch).to.exist;
        expect(eventEmmiter.dispatch).to.be.a('function');
    });
  });

  describe('`eventEmmiter.on`', () => {
    let eventEmmiter;
    let event;
    let listener;
    let listener2;

    beforeEach(() => {
      eventEmmiter  = new Emmiter();
      event         = 'onTabClick';
      listener      = () => {};
      listener2     = () => {};
    });

    afterEach(() => {

    });

    it('should to add a event in a instance of Emmiter class', () => {
      eventEmmiter.on(event, listener);

      expect(eventEmmiter.store).to.exist;
      expect(eventEmmiter.store[event].has(listener)).to.be.true;
    });

    it('should to add a event in a instance of Emmiter class', () => {
      eventEmmiter.on(event, listener);

      expect(eventEmmiter.store).to.exist;
      expect(eventEmmiter.store[event].has(listener)).to.be.true;
    });

    it('should to add two events in a instance of Emmiter class', () => {
      eventEmmiter.on(event, listener);
      eventEmmiter.on(event, listener2);

      expect(eventEmmiter.store).to.exist;
      expect(eventEmmiter.store[event].has(listener)).to.be.true;
      expect(eventEmmiter.store[event].has(listener2)).to.be.true;
    });
  });
});


/*
    let emmiter = new Emmiter();

    emmiter.on('onAddItem', onAddItem);

    emmiter.once('onPageLoad', onPageLoad);

    emmiter.off('onAddItem', onAddItem);

    emmiter.dispatch('onAddItem', payload);
*/
