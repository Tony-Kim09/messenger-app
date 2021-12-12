const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");
const User = require("../models/User");
const mongoose = require('mongoose')

chai.should();
chai.use(chaiHttp);

/*Note that when NODE_ENV is set to test, the server uses the test version of MONGODB URL.
Please Ensure that you have all your .env variables in place.
Refer to README for more information */

const newUser = {
    username: "loggingInTest",
    name: "log",
    password: "login123",
    email: "some@yes.com"
};

const userLogin = {
    email: "some@yes.com",
    password: "login123"
}

const falseLogin = {
    email: "some@yes.com",
    password: "wrongPassword"
}
before(async () => {
    await User.deleteMany({});
})

describe("First Create User to use for Login", () => {
    it("it should return 201", done => {
        chai
            .request(app)
            .post(`/register/`)
            .send(newUser)
            .end((err, response) => {
                response.should.have.status(201);
                response.body.should.have
                    .property("name")
                    .eql("log");
                done();
            });
    });
});

describe("/POST login", () => {

    it("it should return 200", done => {
        chai
            .request(app)
            .post(`/login/`)
            .send(userLogin)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.have
                    .property("name")
                    .eql("log");
                done();
            });
    });
    it("it should return 401", done => {
        chai
            .request(app)
            .post(`/login/`)
            .send(falseLogin)
            .end((err, response) => {
                response.should.have.status(401);
                response.body.should.have
                    .property("error")
                    .eql("invalid username or password");
                done();
            });
    });
});

after(() => {
    mongoose.connection.close()
})