var mocha = require('mocha');
var sinon = require('sinon');
var expect = require('chai').expect;
var rescue = require('../rescue');
var app = require('express')();

describe('rescue route setup', () => {
    let app, getSpy, postSpy, putSpy, deleteSpy;

    before(() => {
        app = {};
        app.get = getSpy = sinon.spy();
        app.post = postSpy = sinon.spy();
        app.put = putSpy = sinon.spy();
        app.delete = deleteSpy = sinon.spy();
    });

    describe('instantiation', () => {
        beforeEach(() => {

        });

        it('should be created', () => {
            rescue(app);

            expect(getSpy.calledTwice).to.be.true;
            expect(putSpy.calledOnce).to.be.true;
            expect(postSpy.calledOnce).to.be.true;
            expect(deleteSpy.calledOnce).to.be.true;
        });
    })
});

