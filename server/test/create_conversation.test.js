const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");
const Conversation = require("../models/conversation");
const mongoose = require('mongoose')

chai.should();
chai.use(chaiHttp);

/*Note that when NODE_ENV is set to test, the server uses the test version of MONGODB URL.
Please Ensure that you have all your .env variables in place.
Refer to README for more information */

const users = {
    usernames: ["john", "doe"]
};;

const existingConversation = {
  usernames: ["tommy", "clara"]
};

const notEnoughParticipants = {
    usernames: ["tom"]
};
before(async () => {
    await Conversation.deleteMany({})
    const existingConvo = new Conversation({participants: ["tommy", "clara"]});
    await existingConvo.save();
});

describe("/POST messages", () => {


    it("Create new conversation", done => {
        chai
        .request(app)
        .post(`/messages/`)
        .send(users)
        .end((err, response) => {
            response.should.have.status(201);
            done();
        });
    });
    it("Conversation Exists", done => {
      chai
      .request(app)
      .post(`/messages/`)
      .send(existingConversation)
      .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have
          .property("message")
          .eql("Chat Already Exists!");
          done();
      });
  });
    it("Not Enough Participants", done => {
    chai
        .request(app)
        .post(`/messages/`)
        .send(notEnoughParticipants)
        .end((err, response) => {
        response.should.have.status(400);
        response.body.should.have
            .property("error")
            .eql("Need 2 people to start a conversation");
        done();
        });
    });
});

after(() => {
    mongoose.connection.close()
});