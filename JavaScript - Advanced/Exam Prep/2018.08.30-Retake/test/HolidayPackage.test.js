const {assert} = require('chai');
class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

describe("HolidayPackge", function() {
    describe("Constructor", function() {

        it("works", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            assert.equal(hp.destination,'Sofia');
            assert.equal(hp.season,'Winter');
            assert.equal(hp.insuranceIncluded,false);
            assert.deepEqual(hp.vacationers,[]);
        });
     });
     describe("showVacationers", function() {

        it("works when empty", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            assert.equal(hp.showVacationers(),"No vacationers are added yet");
        });
        it("works when full", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            hp.addVacationer('Ivan Petrov')
            hp.addVacationer('Ivan Ivanov')
            assert.equal(hp.showVacationers(),"Vacationers:\nIvan Petrov\nIvan Ivanov");
        });
     });
     describe("addVacationer", function() {

        it("throws when empty", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            assert.throws(() => hp.addVacationer(' '),Error,"Vacationer name must be a non-empty string");
        });
        it("throws when not string", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            assert.throws(() => hp.addVacationer(12),Error,"Vacationer name must be a non-empty string");
            assert.throws(() => hp.addVacationer(['Ivan Ivanov']),Error,"Vacationer name must be a non-empty string");
            assert.throws(() => hp.addVacationer({}),Error,"Vacationer name must be a non-empty string");
            assert.throws(() => hp.addVacationer(null),Error,"Vacationer name must be a non-empty string");
        });
        it("throws when names are not two", function() {
            
            let hp = new HolidayPackage('Sofia','Winter');
            assert.throws(() => hp.addVacationer('Ivan'),Error,"Name must consist of first name and last name");
            assert.throws(() => hp.addVacationer('Ivan Petrov Ivanov'),Error,"Name must consist of first name and last name");
            assert.throws(() => hp.addVacationer('IvanSracimir'),Error,"Name must consist of first name and last name");
        });
        it("adds ", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            hp.addVacationer('Ivan Petrov')
            hp.addVacationer('Ivan Ivanov')
            assert.deepEqual(hp.vacationers,['Ivan Petrov','Ivan Ivanov']);
        });
     });
     describe("inshuranceInclude", function() {

        it("throws when not bool", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            assert.throws(() => hp.insuranceIncluded = 'true',Error,"Insurance status must be a boolean");
            assert.throws(() => hp.insuranceIncluded = [],Error,"Insurance status must be a boolean");
            assert.throws(() => hp.insuranceIncluded = null,Error,"Insurance status must be a boolean");
            assert.throws(() => hp.insuranceIncluded = 1,Error,"Insurance status must be a boolean");
        });
        it("works", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            hp.insuranceIncluded = true;
            assert.equal(hp.insuranceIncluded,true);
        });
     });
     describe("generatePackage", function() {

        it("thows when no vacationers", function() {
            let hp = new HolidayPackage('Sofia','Winter');
            assert.throws(() => hp.generateHolidayPackage() = 'true',Error,"There must be at least 1 vacationer added");
        });
        it("calculates winter", function() {
            let totalPrice = 1000;
            let expectedOutput = "Holiday Package Generated\n" +
            "Destination: " + 'Sofia' + "\n" +
            "Vacationers:\nIvan Petrov\nIvan Ivanov" + "\n" +
            "Price: " + totalPrice;
            let hp = new HolidayPackage('Sofia','Winter');
            hp.addVacationer('Ivan Petrov');
            hp.addVacationer('Ivan Ivanov');
            assert.equal(hp.generateHolidayPackage(),expectedOutput);
            hp.insuranceIncluded = true;
            totalPrice = 1100;
            expectedOutput = "Holiday Package Generated\n" +
            "Destination: " + 'Sofia' + "\n" +
            "Vacationers:\nIvan Petrov\nIvan Ivanov" + "\n" +
            "Price: " + totalPrice;
            assert.equal(hp.generateHolidayPackage(),expectedOutput);
        });
        it("calculates summer", function() {
            let totalPrice = 1000;
            let expectedOutput = "Holiday Package Generated\n" +
            "Destination: " + 'Sofia' + "\n" +
            "Vacationers:\nIvan Petrov\nIvan Ivanov" + "\n" +
            "Price: " + totalPrice;
            let hp = new HolidayPackage('Sofia','Summer');
            hp.addVacationer('Ivan Petrov');
            hp.addVacationer('Ivan Ivanov');
            assert.equal(hp.generateHolidayPackage(),expectedOutput);
            hp.insuranceIncluded = true;
            totalPrice = 1100;
            expectedOutput = "Holiday Package Generated\n" +
            "Destination: " + 'Sofia' + "\n" +
            "Vacationers:\nIvan Petrov\nIvan Ivanov" + "\n" +
            "Price: " + totalPrice;
            assert.equal(hp.generateHolidayPackage(),expectedOutput);
        });
        it("calculates spring", function() {
            let totalPrice = 800;
            let expectedOutput = "Holiday Package Generated\n" +
            "Destination: " + 'Sofia' + "\n" +
            "Vacationers:\nIvan Petrov\nIvan Ivanov" + "\n" +
            "Price: " + totalPrice;
            let hp = new HolidayPackage('Sofia','Spring');
            hp.addVacationer('Ivan Petrov');
            hp.addVacationer('Ivan Ivanov');
            assert.equal(hp.generateHolidayPackage(),expectedOutput);
            hp.insuranceIncluded = true;
            totalPrice = 900;
            expectedOutput = "Holiday Package Generated\n" +
            "Destination: " + 'Sofia' + "\n" +
            "Vacationers:\nIvan Petrov\nIvan Ivanov" + "\n" +
            "Price: " + totalPrice;
            assert.equal(hp.generateHolidayPackage(),expectedOutput);
        });
        it("calculates autumn", function() {
            let totalPrice = 800;
            let expectedOutput = "Holiday Package Generated\n" +
            "Destination: " + 'Sofia' + "\n" +
            "Vacationers:\nIvan Petrov\nIvan Ivanov" + "\n" +
            "Price: " + totalPrice;
            let hp = new HolidayPackage('Sofia','Autumn');
            hp.addVacationer('Ivan Petrov');
            hp.addVacationer('Ivan Ivanov');
            assert.equal(hp.generateHolidayPackage(),expectedOutput);
            hp.insuranceIncluded = true;
            totalPrice = 900;
            expectedOutput = "Holiday Package Generated\n" +
            "Destination: " + 'Sofia' + "\n" +
            "Vacationers:\nIvan Petrov\nIvan Ivanov" + "\n" +
            "Price: " + totalPrice;
            assert.equal(hp.generateHolidayPackage(),expectedOutput);
        });
        
     });

});
