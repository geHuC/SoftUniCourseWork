const {assert, expect} = require ('chai');
const PaymentPackage = require ('../12.Payment-Package/PaymentPackage')

describe("PaymentPackege testing", function() {
    describe("PaymentPackege testing", function() {
        it("SetsData correctly", function() {
            const name = 'name';
            const value = 5000;
            const vat = 20;
            const active = true;
            let PP = new PaymentPackage(name,value);
            assert.equal(PP.name,name);
            assert.equal(PP.value,value);
            assert.equal(PP.VAT,vat);
            assert.equal(PP.active,active);
        });
        it("name throws", function() {
            const value = 5000;
            assert.throws(() => new PaymentPackage('',value),Error,'Name must be a non-empty string');
            assert.throws(() => new PaymentPackage(2,value),Error,'Name must be a non-empty string');
            assert.throws(() => new PaymentPackage(null,value),Error,'Name must be a non-empty string');
            assert.throws(() => new PaymentPackage(undefined,value),Error,'Name must be a non-empty string');
            assert.throws(() => new PaymentPackage([],value),Error,'Name must be a non-empty string');
            assert.throws(() => new PaymentPackage({},value),Error,'Name must be a non-empty string');
        });
        it("value throws", function() {
            const name = "Ivan";
            assert.throws(() => new PaymentPackage(name,'string'),Error,'Value must be a non-negative number');
            assert.throws(() => new PaymentPackage(name,'1'),Error,'Value must be a non-negative number');
            assert.throws(() => new PaymentPackage(name,-10),Error,'Value must be a non-negative number');
            assert.throws(() => new PaymentPackage(name,null),Error,'Value must be a non-negative number');
            //assert.throws(() => new PaymentPackage(name,NaN),Error,'Value must be a non-negative number');
            assert.throws(() => new PaymentPackage(name,undefined),Error,'Value must be a non-negative number');
            assert.throws(() => new PaymentPackage(name),Error,'Value must be a non-negative number');
        })
        it("vat throws", function() {
            const name = 'name';
            const value = 5000;
            let PP = new PaymentPackage(name,value);
            assert.throws(() => PP.VAT = -5,Error,'VAT must be a non-negative number');
            assert.throws(() => PP.VAT = '12',Error,'VAT must be a non-negative number');
            assert.throws(() => PP.VAT = 'string',Error,'VAT must be a non-negative number');
            assert.throws(() => PP.VAT = null,Error,'VAT must be a non-negative number');
            assert.throws(() => PP.VAT = undefined,Error,'VAT must be a non-negative number');
            assert.throws(() => PP.VAT = [],Error,'VAT must be a non-negative number');
            assert.throws(() => PP.VAT = {},Error,'VAT must be a non-negative number');
            //assert.throws(() => PP.VAT = NaN,Error,'VAT must be a non-negative number');
        });
        it("vat works", function() {
            const name = 'name';
            const value = 5000;
            const vat = 25;
            let PP = new PaymentPackage(name,value);
            PP.VAT = vat;
            assert.equal(PP.VAT,vat);
        });
        it("active throws", function() {
            const name = 'name';
            const value = 5000;
            let PP = new PaymentPackage(name,value);
            assert.throws(() => PP.active = 'false',Error,'Active status must be a boolean');
            assert.throws(() => PP.active = 1,Error,'Active status must be a boolean');
            assert.throws(() => PP.active = 'string',Error,'Active status must be a boolean');
            assert.throws(() => PP.active = null,Error,'Active status must be a boolean');
            assert.throws(() => PP.active = undefined,Error,'Active status must be a boolean');
            assert.throws(() => PP.active = Boolean,Error,'Active status must be a boolean');
            assert.throws(() => PP.active = [],Error,'Active status must be a boolean');
            assert.throws(() => PP.active = {},Error,'Active status must be a boolean');
        });
        it("active works", function() {
            const name = 'name';
            const value = 5000;
            let PP = new PaymentPackage(name,value);
            PP.active = false;
            assert.equal(PP.active,false);
            PP.active = true;
            assert.equal(PP.active,true);
        });
        it("name change works", function() {
            const name = 'name';
            const newName = 'Pesho'
            const value = 5000;
            let PP = new PaymentPackage(name,value);
            PP.name = newName;
            assert.equal(PP.name,newName);
        });
        it("value change works", function() {
            const name = 'name';
            const value = 5000;
            const newValue = 2200;
            let PP = new PaymentPackage(name,value);
            PP.value = newValue;
            assert.equal(PP.value,newValue);
        });
        it("tostring works", function() {
            const name = 'name';
            const value = 5000;
            const vat = 20;
            const active = true;
            let PP = new PaymentPackage(name,value);
            const output = [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${vat}%): ${value * (1 + vat / 100)}`];
            const expected = output.join('\n');
            assert.equal(PP.toString(),expected);
        });
        it("toString test", function () {
            let temp = new PaymentPackage("HR Services", 1500);
            expect(typeof temp.name).to.equal("string");
            expect(typeof temp.toString()).to.equal("string");
            expect(typeof temp.toString).to.equal("function");
            expect(temp.hasOwnProperty("_name")).to.equal(true);
            expect(temp.hasOwnProperty("name")).to.equal(false);
            expect(temp.toString()).to.equal(
              "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
            );
            temp.active = false;
            expect(temp.toString()).to.equal(
              "Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
            );
            expect(() => {
              let testArr = [
                new PaymentPackage("string", 1000),
                new PaymentPackage("string", 1000),
                new PaymentPackage("string", 1000),
              ];
              testArr.join("\n");
            }).to.not.throw(Error);})
    })
});
