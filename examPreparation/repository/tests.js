const Repository = require('./solution')
const expect = require('chai').expect;
const describe = require('mocha').describe;

describe("Tests …", function() {
    describe("instance", function() {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        entity = {
            name: 'Gosho',
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let anotherEntity = {
            name: 'Stamat',
            age: 29,
            birthday: new Date(1991, 0, 21)
        };
        let wrongEntity = {
            name1: 'Stamat',
            ages: 29,
            birthday: new Date(1991, 0, 22)
        };
        it("instance", function() {
            //Initialize the repository
            let repository = new Repository(properties);
           
            expect(repository.props.name).to.equal('string');
            expect(repository.props.age).to.equal('number');
            expect(repository.props.birthday).to.equal('object');
            expect(repository.data).to.be.a('map');
            expect(repository.data.size).to.equal(0);
            expect(repository.nextId()).to.equal(0);
        });
        it("count", function() {
            //Initialize the repository
            let repository = new Repository(properties);
            expect(repository.count).to.equal(0);
            expect(repository.add(entity)).to.equal(0);
            expect(repository.count).to.equal(1);
            expect(repository.add(entity)).to.equal(1);
            expect(repository.count).to.equal(2);
            repository.del(1);
            expect(repository.count).to.equal(1);
        });
        it("Add", function() {
            //Initialize the repository
            let repository = new Repository(properties);
            expect(repository.add(entity)).to.equal(0);
            expect(repository.data.get(0)).to.equal(entity);
            let nextId = repository.add(entity);
            expect(repository.data.get(nextId)).to.equal(entity);
 
        });
        
        it("get", function() {
            //Initialize the repository
            let repository = new Repository(properties);
            expect(repository.add(entity)).to.equal(0);
            expect(repository.getId(0)).to.equal(entity);
            expect(()=>{repository.getId(1)}).to.throw(`Entity with id: 1 does not exist!`);
            expect(()=>{repository.getId(-1)}).to.throw(`Entity with id: -1 does not exist!`);
            
        });
        it("update", function() {
            //Initialize the repository
            let repository = new Repository(properties);
            expect(repository.add(entity)).to.equal(0);
            expect(()=>{repository.update(1,anotherEntity)}).to.throw(`Entity with id: 1 does not exist!`);
            repository.update(0,anotherEntity);
            expect(repository.getId(0).name).to.equal(`Stamat`);
            expect(repository.getId(0).age).to.equal(29);
            expect(repository.getId(0).birthday).to.deep.equal(new Date(1991, 0, 21));
        });
        it("Del", function() {
            //Initialize the repository
            let repository = new Repository(properties);
            expect(repository.add(entity)).to.equal(0);
            expect(()=>{repository.del(1)}).to.throw(`Entity with id: 1 does not exist!`);
            repository.del(0);
            expect(()=>{repository.getId(0)}).to.throw(`Entity with id: 0 does not exist!`);
        });
        it("validate", function() {
            //Initialize the repository
            let wrong = {
                name1: 'Stamat',
                ages: 29,
                birthday: new Date(1991, 0, 22)
            };
            let repository = new Repository(properties);
            expect(()=>{repository._validate({
                name1: 'Stamat',
                ages: 29,
                birthday: new Date(1991, 0, 22)
            })}).to.throw(`Property name is missing from the entity!`);
            expect(()=>{repository._validate({
                name: 'Stamat',
                age: '29',
                birthday: new Date(1991, 0, 22)
            })}).to.throw(`Property age is not of correct type!`);
        });
     });
});