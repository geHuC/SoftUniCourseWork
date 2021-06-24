let { Repository } = require("../02.Repository/solution.js");
const { assert } = require("chai");

describe("Repository", function () {
    describe("Constructor", function () {
        it("Inits properly", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            const RP = new Repository(properties);
            assert.equal(RP.props,properties);            
            assert.equal(RP.data.size,0);            
            assert.equal(RP.nextId(),0);            
            assert.equal(RP.nextId(),1);            
            assert(RP.data instanceof Map);
        });
        it("Test count", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            const RP = new Repository(properties);
                  
            assert.equal(RP.count,0);         
        });

    });
    describe("add entity", function () {
        it("works", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            assert.equal(RP.add(entity),0);
            assert.equal(RP.count,1);
            assert.deepEqual(RP.getId(0),entity);
        });
        it("throws missing property", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            assert.throws(() => RP.add({name: 'Gosho',age: 22}),Error,`Property birthday is missing from the entity!`);
            assert.throws(() => RP.add({name: 'Gosho',birthday: new Date(1998, 0, 7)}),Error,`Property age is missing from the entity!`);
            assert.throws(() => RP.add({birthday: new Date(1998, 0, 7),age: 22}),Error,`Property name is missing from the entity!`);
            assert.throws(() => RP.add({}),Error);
            assert.throws(() => RP.add(null),Error);
            assert.throws(() => RP.add(undefined),Error);
        });
        it("throws invalid type", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            assert.throws(() => RP.add({name: 1234,age: 22,birthday: new Date(1998, 0, 7)}),TypeError,`Property name is not of correct type!`);
            assert.throws(() => RP.add({name: 'Gosho',age: '22',birthday: new Date(1998, 0, 7)}),TypeError,`Property age is not of correct type!`);
            assert.throws(() => RP.add({name: 'Gosho',age: [],birthday: new Date(1998, 0, 7)}),TypeError,`Property age is not of correct type!`);
            assert.throws(() => RP.add({name: 'Gosho',age: 22,birthday: '11/11/2011/'}),TypeError,`Property birthday is not of correct type!`);
        });
    });
    describe("getId", function () {
        it("works", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            RP.add(entity);
            assert.deepEqual(RP.getId(0),entity);
        });
        it("throws", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            assert.throws(() => RP.getId(2),Error,`Entity with id: 2 does not exist!`)

            entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            RP.add(entity);
            assert.throws(() => RP.getId(2),Error,`Entity with id: 2 does not exist!`);
            assert.throws(() => RP.getId(-2),Error,`Entity with id: -2 does not exist!`);
        });
    });
    describe("update", function () {
        it("works", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            entity2 = {name: 'Ivan',age: 22,birthday: new Date(1998, 0, 7)};
            let id = RP.add(entity);
            RP.update(id,entity2)
            assert.equal(RP.getId(id),entity2);
        });
        it("throws validation", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            let id = RP.add(entity);
            assert.throws(() => RP.update(id,{name: 1234,age: 22,birthday: new Date(1998, 0, 7)}),TypeError,`Property name is not of correct type!`);
            assert.throws(() => RP.update(id,{name: 'Gosho',age: '22',birthday: new Date(1998, 0, 7)}),TypeError,`Property age is not of correct type!`);
            assert.throws(() => RP.update(id,{name: 'Gosho',age: [],birthday: new Date(1998, 0, 7)}),TypeError,`Property age is not of correct type!`);
            assert.throws(() => RP.update(id,{name: 'Gosho',age: 22,birthday: '11/11/2011/'}),TypeError,`Property birthday is not of correct type!`);
        });
        it("throws missing id", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            let id = RP.add(entity);
            assert.throws(() => RP.update(12,{}),Error,`Entity with id: 12 does not exist!`);
            assert.throws(() => RP.update(-12,{}),Error,`Entity with id: -12 does not exist!`);
            assert.throws(() => RP.update('0',{}),Error,`Entity with id: 0 does not exist!`);
        });
    });describe("del", function () {
        it("throws", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            let id = RP.add(entity);
            assert.throws(() => RP.del(12),Error,`Entity with id: 12 does not exist!`);
            assert.throws(() => RP.del(-12),Error,`Entity with id: -12 does not exist!`);
            assert.throws(() => RP.del('0'),Error,`Entity with id: 0 does not exist!`);
        });
        it("works", function () {
            let properties = {name: "string",age: "number",birthday: "object"};
            const RP = new Repository(properties);
            let entity = {name: 'Gosho',age: 22,birthday: new Date(1998, 0, 7)};
            let entity2 = {name: 'Pesho',age: 22,birthday: new Date(1998, 0, 7)};
            let entity3 = {name: 'Drucho',age: 22,birthday: new Date(1998, 0, 7)};
            let id = RP.add(entity);
            let id2 = RP.add(entity2);
            let id3 = RP.add(entity3);
            assert.equal(RP.count, 3);
            RP.del(id2);
            assert.throws(() => RP.del(id2),Error);
            assert.throws(() => RP.getId(id2),Error);
            
            assert.equal(RP.getId(id),entity);
            assert.equal(RP.getId(id3),entity3);
        });
    })
});

