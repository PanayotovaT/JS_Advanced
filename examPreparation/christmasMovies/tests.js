const ChristmasMovies = require('./02. Christmas Movies_Resources');
const describe = require('mocha').describe;
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('christmas movies', () => {

    describe('Instantiation', () => {
        it('instantiation with no params', () => {
            let myMovie = new ChristmasMovies();
            expect(myMovie).to.deep.equal({ movieCollection: [], watched: {}, actors: [] });
            expect(myMovie.movieCollection).to.deep.equal([]);
            expect(myMovie.watched).to.deep.equal({});
            expect(myMovie.actors).to.deep.equal([]);
            expect(myMovie.movieCollection.length).to.deep.equal(0);
            expect(Object.keys(myMovie.watched).length).to.deep.equal(0);
            expect(myMovie.actors.length).to.equal(0);

        });

    });

    describe('buyMovie', () => {

        it('buy new movie with one actor', () => {
            let firstTest = new ChristmasMovies();

            expect(firstTest.buyMovie('movieName', ['actor1'])).to.equal('You just got movieName to your collection in which actor1 are taking part!');
        });
        it('buy new movie with more actors', () => {
            let test2 = new ChristmasMovies();
            expect(test2.buyMovie('movieName2', ['actor1', 'actor2'])).to.equal('You just got movieName2 to your collection in which actor1, actor2 are taking part!');
        });


        // it('if the movie already exists', () => {
        //     assert.throws(() => firstTest.buyMovie('movieName2', ['actor1', 'actor2']),'You already own movieName2 in your collection!');
        // });
        it('if the movie already exists', () => {
            let test3 = new ChristmasMovies();
            test3.buyMovie('movie2', ['actor1', 'actor2'])
            expect(() => test3.buyMovie('movie2', ['actor1', 'actor2'])).to.throw('You already own movie2 in your collection!');
        });
        it('new movie with same actors', () => {
            let test4 = new ChristmasMovies();
            expect(test4.buyMovie('movie3', ['actor1', 'actor1'])).to.equal('You just got movie3 to your collection in which actor1 are taking part!')
        })

    });

    describe('discardMovie', () => {

        it('the movie is not in the collection', () => {
            let secondTest = new ChristmasMovies();
            secondTest.buyMovie('movieName1', ['actor1']);
            expect(() => secondTest.discardMovie('movieName2')).to.throw('movieName2 is not at your collection!')
        });

        it('just delete the movie if not watched', () => {
            let secondTest = new ChristmasMovies();
            secondTest.buyMovie('movieName1', ['actor1']);
            expect(() => secondTest.discardMovie('movieName1')).to.throw('movieName1 is not watched!')

        });

        it('delete the movie and remove it from the watched collection', () => {
            let secondTest = new ChristmasMovies();
            secondTest.buyMovie('movieName3', ['actor1']);
            secondTest.watchMovie('movieName3');
            expect(secondTest.discardMovie('movieName3')).to.equal('You just threw away movieName3!');
        });
    });

    describe('watchMovie', () => {

        it('The movie is in the collection and is not watched', () => {
            let thirdTest = new ChristmasMovies();
            thirdTest.buyMovie('movieName4', ['actor1']);
            thirdTest.watchMovie('movieName4');
            expect(thirdTest.watched['movieName4']).to.equal(1);
        });


        it('The movie is in the collection and is already watched', () => {
            let thirdTest = new ChristmasMovies();
            thirdTest.buyMovie('movieName5', ['actor1']);
            thirdTest.watchMovie('movieName5');
            thirdTest.watchMovie('movieName5');
            expect(thirdTest.watched['movieName5']).to.equal(2);
        });

        it('The movie is not in the collection', () => {
            let thirdTest = new ChristmasMovies();
            expect(() => thirdTest.watchMovie('movieName6')).to.throw('No such movie in your collection!')
        });

    });

    describe('favouriteMovie', () => {

        it('if the watched array is  0', () => {
            let fourthTest = new ChristmasMovies();
            fourthTest.buyMovie('movie1', ['actor1'])
            expect(() => fourthTest.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
        })

        it('one favorite movie, watched 1 times', () => {
            let fivthTest = new ChristmasMovies();
            fivthTest.buyMovie('movieName8', ['actor1']);
            fivthTest.watchMovie('movieName8');
            expect(fivthTest.favouriteMovie()).to.equal('Your favourite movie is movieName8 and you have watched it 1 times!')
        });

        it('one favorite movie, watched more times', () => {
            let sixthTest = new ChristmasMovies();
            sixthTest.buyMovie('movieName1', ['actor1']);
            sixthTest.watchMovie('movieName1');
            sixthTest.watchMovie('movieName1');
            expect(sixthTest.favouriteMovie()).to.equal('Your favourite movie is movieName1 and you have watched it 2 times!')
        });


        it('show the most watched as fav movie', () => {
            let seventhTest = new ChristmasMovies();
            seventhTest.buyMovie('movieName1', ['actor1']);
            seventhTest.buyMovie('movieName2', ['actor1']);
            seventhTest.watchMovie('movieName1');
            seventhTest.watchMovie('movieName2');
            seventhTest.watchMovie('movieName2');
            expect(seventhTest.favouriteMovie()).to.equal('Your favourite movie is movieName2 and you have watched it 2 times!');
        })
    });

    describe('mostStarredActors', () => {





        it('no movies in the collection watched', () => {
            let eigthTest = new ChristmasMovies();
            expect(() => { eigthTest.mostStarredActor() }).to.throw('You have not watched a movie yet this year!');
        });


        it('the most starred actor, 1 actor, 1 movie', () => {
            let ninthTest = new ChristmasMovies();
            ninthTest.buyMovie('movieName1', ['actor1']);
            expect(ninthTest.mostStarredActor()).to.equal('The most starred actor is actor1 and starred in 1 movies!')
        });

        it('the most starred actor, 1 actor, 2 movies', () => {
            let tenthTest = new ChristmasMovies();
            tenthTest.buyMovie('movieName1', ['actor1']);
            tenthTest.buyMovie('movieName2', ['actor1']);
            expect(tenthTest.mostStarredActor()).to.equal('The most starred actor is actor1 and starred in 2 movies!')
        });

        it('the most starred actor, 2 actor, 3 movies', () => {
            let eleventhTest = new ChristmasMovies();
            eleventhTest.buyMovie('movieName1', ['actor1', 'actor2', 'actor3']);
            eleventhTest.buyMovie('movieName2', ['actor2', 'actor3']);
            eleventhTest.buyMovie('movieName3', ['actor3']);
            expect(eleventhTest.mostStarredActor()).to.equal('The most starred actor is actor3 and starred in 3 movies!')
        })
    })
})