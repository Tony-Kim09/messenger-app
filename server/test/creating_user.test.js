const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");
const User = require("../models/user");
const mongoose = require('mongoose')

chai.should();
chai.use(chaiHttp);

/*Note that when NODE_ENV is set to test, the server uses the test version of MONGODB URL.
Please Ensure that you have all your .env variables in place.
Refer to README for more information */

const newUser = {
    username: "tester2",
    name: "test",
    password: "test123",
    email: "some@email.com"
};

const passwordTooShort = {
    username: "tester1",
    name: "bob",
    password: "1",
    email: "testing@mocha.chai"
}
before(async () => {
    await User.deleteMany({})
})

describe("/POST register", () => {


    it("it should return 201", done => {
        chai
        .request(app)
        .post(`/register/`)
        .send(newUser)
        .end((err, response) => {
            response.should.have.status(201);
            response.body.should.have
            .property("name")
            .eql("test");
            done();
        });
    });
    it("Incorrect Password Length", done => {
    chai
        .request(app)
        .post(`/register/`)
        .send(passwordTooShort)
        .end((err, response) => {
        response.should.have.status(400);
        response.body.should.have
            .property("error")
            .eql("password must be at least 6 characters long");
        done();
        });
    });
});

after(() => {
    mongoose.connection.close()
})